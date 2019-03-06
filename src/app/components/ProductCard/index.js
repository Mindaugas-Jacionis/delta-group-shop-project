import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function ProductCard({
  image,
  name,
  price,
  currencySymbol,
  id,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div className="Product-card">
      <div className="Product-card--image">
        <img src={image} alt={name} />
      </div>
      <div className="Product-card--content">
        <h3>{name}</h3>
        <p>{`${price}${currencySymbol}`}</p>
        <div className="Product-card--content-cta">
          <button type="button" onClick={() => console.log("Add to cart", id)}>
            <span role="img" aria-label="Add to Cart">
              🛒
            </span>
          </button>
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span role="img" aria-label="Add to Favorites">
              {isFavorite ? "💔" : "❤️"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ProductCard;
