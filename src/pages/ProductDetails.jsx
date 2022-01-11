import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './ProductDetails.module.css';

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((productsFetched) => {
        setProduct(productsFetched);
        return setLoading(false);
      });
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <p className={styles.loading}>Obteniendo Producto.....</p>
      ) : (
        <div className={styles.productContainer}>
          <div>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productDetail}>
              <p className={styles.productPrice}>$ {product.price}</p>
              <p className={styles.productRate}> ⭐ {product.rating.rate}</p>
            </div>
          </div>

          <img className={styles.img} src={product.image} alt={product.title} />
        </div>
      )}
    </main>
  );
}
