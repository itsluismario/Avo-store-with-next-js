import React, { useEffect, useState } from "react";
import ProductList from '@components/ProductList/ProductList';
import { Loading } from "@components/Loading/Loading";
import HeaderOne from "@components/Header/Header";
import { server } from '../config'; 
import Layout from "@components/Layout/Layout";

export const getServerSideProps = async () => {
    const response = await fetch(`${server}/api/avo`) // La agregas en Fetch API    
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
        <Layout>
            <HeaderOne/>
            {loading && <Loading />}
            {loading ?  null : <div><h2 className='ui huge center aligned header h2'><a href="/yes-or-no">¿Debería comer una aguacate hoy?</a>
                                </h2><ProductList products={productList}/></div>}
            <style jsx global>{`
            .ui.huge.center.aligned.header.h2 {
                margin-bottom: 40px;
                font-size: 20px;
                cursor: pointer;
            }
        `}</style>
        </Layout>
    );
};

export default HomePage;