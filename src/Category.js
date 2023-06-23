import { React, useState, useEffect } from "react";
import axios from "axios";
import Onsaleitem from "./Onsaleitem";

const Category = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(props.link);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <div className="wrap">
          <Onsaleitem
            title={product.name}
            price={product.price}
            category={product.category.category + product.category.subcategory}
          />
        </div>
      ))}
    </>
  );
};

export default Category;
