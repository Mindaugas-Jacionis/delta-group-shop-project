import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "../../components";
import "./index.scss";

function Shop({ products, toggleFavorite }) {
  return (
    <div className="Products-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      currencySymbol: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
};

export default Shop;
