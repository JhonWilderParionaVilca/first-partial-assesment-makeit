import PropTypes from 'prop-types';

import { formatmmss } from '../../helpers/formatmmss';

import { typeProductCard } from './typeProduct';

import styles from './ProductCard.module.css';

export function ProductCard({ id, title, image, counter, handleProduct }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} height={120} />
      <p className={styles.card__title}>{title}</p>
      <div className={styles.card__body}>
        <p>{formatmmss(counter)}</p>
        <button
          className={styles.card__btn}
          type="button"
          disabled={!counter}
          onClick={() => handleProduct(id)}
        >
          {id} Go to Detail!
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  ...typeProductCard,
  counter: PropTypes.number.isRequired,
  handleProduct: PropTypes.func.isRequired,
};
