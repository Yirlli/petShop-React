import { Link } from "react-router-dom"

const Item =({product}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.nombre}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.nombre} />
            </picture>
            <section>
                <p>Id: {product.id}</p>
                <p>
                    Precio: ${product.precio}
                </p>
                <p>
                    Stock disponible: {product.stock} unidades
                </p>
            </section>
            <footer>
                <Link className="btn" to={`/item/${product.id}`} > Ver detalles</Link>
            </footer>
           

        </article>
    )
}

export default Item