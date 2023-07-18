
import Item from "../Item/Item";

const ItemList = ({ productos, nombre }) => {
  return (
    <div className="ListGroup">
      <h2>{nombre}</h2>
      <div className="prodContrainer grid grid-cols-3 gap-4">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;