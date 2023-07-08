const Item =({id, nombre, img, precio, stock}) =>{
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock disponible: ${stock}
                </p>
            </section>
            <footer>
                <button> Ver detalles</button>
            </footer>

        </article>
    )
}

export default Item