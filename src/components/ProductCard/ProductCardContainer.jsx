import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductCardContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((productsFetched) => setProducts(productsFetched));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
