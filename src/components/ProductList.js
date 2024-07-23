import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ filters }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      (!filters.electronics &&
        !filters.jewelery &&
        !filters.mensClothing &&
        !filters.womensClothing) ||
      (filters.electronics && product.category === "electronics") ||
      (filters.jewelery && product.category === "jewelery") ||
      (filters.mensClothing && product.category === "men's clothing") ||
      (filters.womensClothing && product.category === "women's clothing");

    const matchesBrand =
      (!filters.brand1 && !filters.brand2) ||
      (filters.brand1 && product.brand === "Brand 1") ||
      (filters.brand2 && product.brand === "Brand 2");

    const matchesPrice = product.price <= filters.price;

    return matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div className="product-list">
      {filteredProducts && filteredProducts.length === 0 ? (
        <span className="product-card">No record to display</span>
      ) : (
        <>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
