import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item}) =>{
    return(
        <article className='Card ' >
            <header className='Header'>
                <h2 className='ItemHeader mt-4'>
                    {item.nombre}
                </h2>
            </header>
            <picture>
                <img src={item.img} alt={item.nombre}/>
            </picture>
            <section>
                <p>
                    <b>Categoria: </b>{item.categoria}
                </p>
                
                <p>
                    <b>Descripcion: </b>{item.descripcion}
                </p>
                <p>
                   <b> Precio:</b> ${item.precio}
                </p>
            </section>
            <footer>
                <ItemCount initial={1}stock={item.stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}

export default ItemDetail