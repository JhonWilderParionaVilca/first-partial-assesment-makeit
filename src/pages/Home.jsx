import React from 'react';
import { ProductCardContainer } from '../components';

export function Home() {
  return (
    <main>
      <h1>Products</h1>
      <div>
        <ProductCardContainer />
      </div>
    </main>
  );
}
