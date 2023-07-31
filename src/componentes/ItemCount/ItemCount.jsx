import { useState } from "react";

const ItemCount = ({quantity, decrement, increment, handleAgregar}) => {
  

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={handleAgregar}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount