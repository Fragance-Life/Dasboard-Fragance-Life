import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function ProductsList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("%cse montó el componente", "color:green");

    fetch("https://fragance--life.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // console.log("%cse actualizó el componente", "color:yellow");
  }, [products]);

  useEffect(() => {
    return () => {
      // console.log("%cse desmontó el componente", "color:red");
    };
  }, []);

  return (
    <React.Fragment>
      
      <div className="principal">
    <h1 className="h1">Estos son los productos disponibles</h1>
        <ul className="list">
          {products.length === 0 && <p>Cargando...</p>}
          {products.map((product, i) => {
            return (
              <li className="elements" key={i}>
                <Link to={`/ProductsList/${product.id}`}>
                  <div>
                    
                  </div>
                  <h2 className="title">{product.name}</h2>
                  <img className="img"
                    src={product.images_products[0]}
                    alt="avatar"
                    width="150"
                  />
                 <div className="content">
                 <p>
                    Para {product.gender}
                    <br /> Marca : {product.brand.name}
                    <br />
                    Precio : $ {product.price}{" "}
                  </p>

                  <p>{product.description}</p>
                 </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      
      
    </React.Fragment>
  );
}

export default ProductsList;
