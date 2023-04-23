import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleProductsIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  useEffect(handleProductsIndex, []);

  return (
    <div>
      <ProductsIndex products={products} />
    </div>
  );
}
