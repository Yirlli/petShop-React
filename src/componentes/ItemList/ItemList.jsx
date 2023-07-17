import Item from "../Item/Item"
const ItemList = ({listProducts}) =>{
    return(
        <div className="ListGroup">
            {listProducts.map(prod => <Item key={prod.id} product={prod} />)}
        </div>
    )
}

export default ItemList