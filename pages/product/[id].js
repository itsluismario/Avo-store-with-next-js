import React, { useEffect, useState }from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  

  const [product, setProduct ] = useState();

  const { query: { id }} = useRouter();

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProduct(data)
    })
}, [])
  return (
    <div>Product: { product.name } </div>
  )
};

export default ProductItem;                 