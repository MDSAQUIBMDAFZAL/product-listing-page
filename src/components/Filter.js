import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="filter">
      <h3>Categories</h3>
      <label>
        <input
          type="checkbox"
          name="electronics"
          checked={filters.electronics}
          onChange={handleChange}
        />
        Electronics
      </label>
      <label>
        <input
          type="checkbox"
          name="jewelery"
          checked={filters.jewelery}
          onChange={handleChange}
        />
        Jewelery
      </label>
      <label>
        <input
          type="checkbox"
          name="mensClothing"
          checked={filters.mensClothing}
          onChange={handleChange}
        />
        Men's Clothing
      </label>
      <label>
        <input
          type="checkbox"
          name="womensClothing"
          checked={filters.womensClothing}
          onChange={handleChange}
        />
        Women's Clothing
      </label>

      <h3>Price Range</h3>
      <div className="price-display">${filters.price}</div>
      <input
        type="range"
        name="price"
        min="0"
        max="1000"
        value={filters.price}
        onChange={handleChange}
      />
      <h3>Brands</h3>
      <label>
        <input type="checkbox" name="brand1" onChange={handleChange} />
        Brand 1
      </label>
      <label>
        <input type="checkbox" name="brand2" onChange={handleChange} />
        Brand 2
      </label>
    </div>
  );
};

export default Filter;
