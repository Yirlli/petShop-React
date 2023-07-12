import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) =>{
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre}/>
            </picture>
            <section>
                <p>
                    Categoria: {categoria}
                </p>
                <p>
                    Descripcion: {descripcion}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1}stock={stock} onAdd={(quantity) => console.log('Cantidad agregadda')}/>
            </footer>
        </article>
    )
}

export default ItemDetail