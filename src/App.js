import React, { useState } from "react";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState({
    electronics: false,
    jewelery: false,
    mensClothing: false,
    womensClothing: false,
    price: 1000,
    brand1: false,
    brand2: false,
  });

  return (
    <div className="App">
      <header>
        <h1>Product Listing Page</h1>
      </header>
      <div className="content">
        <Filter filters={filters} setFilters={setFilters} />
        <ProductList filters={filters} />
      </div>
    </div>
  );
};

export default App;
