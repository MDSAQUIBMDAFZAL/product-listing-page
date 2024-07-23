import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleDescriptionToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (description) => {
    if (description.length <= 50) return description;
    return `${description.slice(0, 50)}...`;
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        {showFullDescription
          ? product.description
          : truncateDescription(product.description)}{" "}
        {product.description.length > 50 && (
          <span className="see-more" onClick={handleDescriptionToggle}>
            {showFullDescription ? "See less" : "See more"}
          </span>
        )}
      </p>
      <h3>${product.price}</h3>
    </div>
  );
};

export default ProductCard;
