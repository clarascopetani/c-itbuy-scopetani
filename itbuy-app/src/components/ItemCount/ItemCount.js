import React, { useEffect, useState } from "react";
import './itemcount.css';

export function ItemCount({ stock, initial, OnAdd }) {
    const [count, setCount] = useState(parseInt(initial) || 0);

    OnAdd = () => {
      stock = stock - count;
      alert("Agregar " + count + " al carrito")
    };

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
          disabled={count < 1}
          className="btn btn-outline-primary btn-lg"
          type="button"
          onClick={OnAdd}
        >
          Agregar al carrito
        </button>
      </div>
    );
}

export default ItemCount;