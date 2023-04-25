import axios from "axios";
import { useState, useEffect } from "react";

import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Content() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [isProductShowVisible, setIsProductShowVisible] = useState(false);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    setCurrentProduct(product);
    setIsProductShowVisible(true);
  };

  const handleClose = () => {
    setIsProductShowVisible(false);
  };

  const handleProductsNew = (params) => {
    axios.post(`http://localhost:3000/products.json`, params).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div className="container">
      <ProductsNew onCreateProduct={handleProductsNew} />
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
