import React from "react";
import './item.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({ item }) => {
    return (
        <div className="card item-card">
            <img className="card-img-top item-image" src={item.pictureUrl} alt="" style={{width: "15rem"}} />
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <div className="item-price"><h5 className="price">${item.price}</h5></div>
                <h6 className="item-stock"> Stock disponible: {item.stock}</h6>
            </div>
            <ItemCount stock={item.stock} initial="1"/>
        </div>
    );
};
