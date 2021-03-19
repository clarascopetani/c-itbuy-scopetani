import React, { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, stock: 4, title:"Ups Apc Easy 650va Estabilizador Y Protector De Tensión", price:12345, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_643771-MLA45131119588_032021-W.webp" },
          { id:2, stock: 5, title:"Rack Genrod De 40 Unidades", price:66000, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_759601-MLA31028163153_062019-W.webp"},
          { id:3, stock: 14, title:"Schneider Actassi Flex Jack Cat", price:450, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_635936-MLA31983788511_082019-V.webp" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container">
      <ItemList items={items}/>
    </div>
  );
};