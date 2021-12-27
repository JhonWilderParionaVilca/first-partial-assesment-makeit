import React from 'react';
import PropTypes from 'prop-types';

export function ProductCard({ product }) {
  return <div>{product.title}</div>;
}

const typosProduct = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

ProductCard.propTypes = {
  product: PropTypes.shape(typosProduct).isRequired,
};
