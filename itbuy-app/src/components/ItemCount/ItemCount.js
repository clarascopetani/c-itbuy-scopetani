import React, { useEffect, useState } from "react";
import './itemcount.css';

export function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(parseInt(initial) || 0);
    
    useEffect(() => {
        setCount(parseInt(initial));
        return;
    }, [initial]);
    
    const addItem = () => {
        setCount(count + 1);
      };
    
    const removeItem = () => {
    setCount(count - 1);
    };

    return (
        <div className="containerAddCart">
        <div className="containerItemCount">
          <button
            disabled={count <= 0}
            className="btn btn-outline-primary"
            type="button"
            onClick={removeItem}
          >-
          </button>

          <div>{count}</div>

          <button
            disabled={count >= stock}
            className="btn btn-outline-primary"
            type="button"
            onClick={addItem}
          >+
          </button>
        </div>

        <button
          className="btn btn-outline-primary btn-lg"
          type="button"
          onClick={onAdd}
        >
          Agregar al carrito
        </button>
      </div>
    );
}

export default ItemCount;