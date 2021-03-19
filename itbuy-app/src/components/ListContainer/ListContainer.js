import React from "react";
import { ItemCount } from '../ItemCount/ItemCount';

export function  ListContainer({list, itemStock}) {
  console.log({list})

  const stock = 5;

  return (
    <div className="container">
      <ItemCount stock={stock} initial="1"/>
    </div>
  );
}

export default ListContainer;