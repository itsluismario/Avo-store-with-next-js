import React, { useEffect, useState } from "react";
import ProductList from '@components/ProductList/ProductList';
import { Loading } from "@components/Loading/Loading";
import HeaderOne from "@components/Header/Header";
import { server } from '../config'; 

export const getServerSideProps = async () => {
    const response = await fetch('https://next-js-itsluismario.vercel.app/api/avo') // La agregas en Fetch API
    const { data: productList }: TAPIAvoResponse = await response.json()
 
    return {
        props: {
            productList,
        },
    }
}

const HomePage = ({ productList }: { productList: TProduct[]} ) => {

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                setLoading(false);
            } catch(error) {
                let message = 'Unknown Error'
                if (error instanceof Error) message = error.message
            }
            
        }, 500)
    },[]
    );


    return (
        <div>
            <HeaderOne/>
            {loading && <Loading />}
            {loading ?  null : <ProductList products={productList}/>}
        </div>
    );
};

export default HomePage;