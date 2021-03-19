import React from "react";
import { ItemCount } from '../ItemCount/ItemCount';

export function  ListContainer({list}) {
  console.log({list})
  return (
    <div className="container">
      <ItemCount stock="5" initial="1" />
    </div>
  );
}

  export default ListContainer;