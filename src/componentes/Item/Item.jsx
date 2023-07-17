import { Link } from "react-router-dom"

const Item =({producto}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {producto.nombre}
                </h2>
            </header>
            <picture>
                <img src={producto.img} alt={producto.nombre} />
            </picture>
            <section>
                <p>Id: {producto.id}</p>
                <p>
                    Precio: ${producto.precio}
                </p>
                <p>
                    Stock disponible: {producto.stock} unidades
                </p>
            </section>
            <footer>
                <Link className="btn" to={`/item/${producto.id}`} > Ver detalles</Link>
            </footer>
           

        </article>
    )
}

export default Item