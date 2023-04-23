import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Content() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const handleProductsShow = (product) => {
    setCurrentProduct(product);
  };
  const handleProductsNew = (params) => {
    axios.post(`http://localhost:3000/products.json`, params).then((response) => {
      console.log(response);
      setProducts([...products, response.data]);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <ProductsNew onCreateProduct={handleProductsNew} />
      <ProductsIndex products={products} />
      <Modal>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
