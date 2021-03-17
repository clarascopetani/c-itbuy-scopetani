import React from "react";
import { ItemCount } from '../ItemCount/ItemCount';

export default function ListContainer({gretting}) {
    return (
      <div className="container">
        <h1>{gretting}</h1>
        <ItemCount stock="5" initial="1" />
      </div>
    );
  }