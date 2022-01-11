import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { typeProductCard } from './typeProduct';

export function ProductCardContainer({ id, title, image }) {
  const [counter, setCounter] = useState(
    Math.floor(Math.random() * (300 - 30) + 30)
  );

  const navigate = useNavigate();

  const handleProduct = (idProduct) => {
    navigate(`/detail/${idProduct}`);
  };

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((prevCount) => prevCount - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  return (
    <ProductCard
      id={id}
      title={title}
      image={image}
      counter={counter}
      handleProduct={handleProduct}
    />
  );
}

ProductCardContainer.propTypes = typeProductCard;
