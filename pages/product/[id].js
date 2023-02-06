import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const { query: { id }} = useRouter();
  return (
    <div>Es una paginna dinamica { id } </div>
  )
};

export default ProductItem;                 