import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import CheckoutForm from "../Checkout/CheckoutForm"
import { Timestamp, addDoc, collection, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";




const Checkout = () => {
    const[loading, setLoading] = useState(false)
    const[orderId, setOrderId] = useState("")

    const{shoppingCart, precioTotal, vaciarCarrito} = useContext(CartContext)

    const createOrder= async ({nombre, telefono, email}) => {
    setLoading(true)

    try{
        const objOder={
            comprador: {
                nombre, telefono, email
            },
            items: shoppingCart,
            total: precioTotal,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const sinStock = []
        const ids = shoppingCart.map(item => item.id)
        const productsRef = collection(db, "products")
        const productsAddedFromFirestore= await getDocs(query(productsRef, where(documentId(), "in", ids)))

        const{docs} = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stockDb
            const productAddedToCart = shoppingCart.find(item => item.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else{
                sinStock.push({id: doc.id, ...dataDoc})
            }
        })
        if(sinStock.length ===0){
            await batch.commit()

            const orderRef= collection(db, "orders")

            const orderAdded = await addDoc(orderRef, objOder)

            setOrderId(orderAdded.id)
            vaciarCarrito()
        }else{
            console.error("Productos fuera de de stock")
        }
    }catch(error){
        console.error(error)
    }finally{
        setLoading(false)
    }
    if(loading){
        return <h1>Se esta generando su orden...</h1>
    }
    if(orderId){
        return <h1>El id de su orden es : {orderId}</h1>
    }
    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )


    }
}

export default Checkout