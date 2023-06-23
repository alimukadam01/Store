import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Onsaleitem from "./Onsaleitem";
import "./AllProducts.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/products/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="allproducts">
        <div className="title">
        AllProducts
        </div>
        <div className="contents">
          {products.map((product, index) => (
            <div className="wrap">
              <Onsaleitem
                title={product.name}
                price={product.price}
                category={
                  product.category.category + product.category.subcategory
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
