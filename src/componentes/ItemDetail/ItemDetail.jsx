import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item}) =>{
    return(
        <article className='Card'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {item.nombre}
                </h2>
            </header>
            <picture>
                <img src={item.img} alt={item.nombre}/>
            </picture>
            <section>
                <p>
                    Categoria: {item.categoria}
                </p>
                <p>
                    Descripcion: {item.descripcion}
                </p>
                <p>
                    Precio: ${item.precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1}stock={item.stock} onAdd={(quantity) => console.log('Cantidad agregadda')}/>
            </footer>
        </article>
    )
}

export default ItemDetail