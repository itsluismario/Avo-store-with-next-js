import React, { useEffect, useState }from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';
import { server } from '@config'; 
import { GetStaticProps } from 'next';

// What are the pages that we need? 
// When build time is running in next js, getStaticPath generates the pages that are needed
export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/avo`) // La agregas en Fetch API    
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id
    }
  }))

  return {
    paths,
    // Incremental static generation
    // Any id that is not indentified in the params (API) list will display 404 
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`${server}/api/avo/${id}`) // La agregas en Fetch API    
  const product: TProduct = await response.json()

  return {
      props: {
          product,
      },
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {

  return (        
      <Layout>
      {product == null ? null : <ProductSummary product={product} />}
      </Layout>
    )
};

export default ProductItem;                 
