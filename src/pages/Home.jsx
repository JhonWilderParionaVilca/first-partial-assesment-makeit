import React, { useEffect, useState } from 'react';
import { ProductCardContainer } from '../components';

import styles from './Home.module.css';

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((productsFetched) => {
        setProducts(productsFetched);
        return setLoading(false);
      });
  }, []);

  return (
    <main className={styles.product}>
      <h1 className={styles.product__title}>Products</h1>
      {loading ? (
        <p className={styles.product__loading}>Obteniendo Productos.....</p>
      ) : (
        <div className={styles.product__grid}>
          {products.map(({ id, title, image }) => (
            <ProductCardContainer
              key={id}
              id={id}
              title={title}
              image={image}
            />
          ))}
        </div>
      )}
    </main>
  );
}
