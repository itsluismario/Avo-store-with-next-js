import React, { useEffect, useState }from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';


const ProductItem = () => {
  
  const [product, setProduct ] = useState<TProduct>();
  
  const { query: { id }} = useRouter();

  useEffect(() => {
      if(id) {
      window.fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data: TProduct) => {
          setProduct(data)
      })
    }
  }, [id]);

  return (        
      <Layout>
      {product == null ? null : <ProductSummary product={product} />}
      </Layout>
    )
};

export default ProductItem;                 
