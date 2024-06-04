import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import dataJson from '../data/productos.json';

function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([]);
  const {id} = useParams ();

  useEffect(() => {
      const prm = new Promise((resolve) => {
          setTimeout(() => {
              resolve(id ? dataJson.filter(item => item.categoria === id) : dataJson)
          }, 250)
      });

      prm.then((data) => {
        setProductos(data)
      })
  },[id]);
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 m-3">{greeting}</h1>
        <hr className="my-4" />
        <p className="lead text-center">Aquí encontrarás los mejores productos de nuestra tienda</p>
      </div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
