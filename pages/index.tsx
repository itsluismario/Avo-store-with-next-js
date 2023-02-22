import React, { useEffect, useState } from "react";
import ProductList from '@components/ProductList/ProductList';
import { Loading } from "@components/Loading/Loading";
import HeaderOne from "@components/Header/Header";

const HomePage = () => {
    const [productList, setProductList ] = useState<TProduct[]>([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                window.fetch('/api/avo')
                .then((response) => response.json())
                .then(({data}) => {
                setProductList(data)
                })
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
            {loading && <Loading />}
            <HeaderOne/>
            <ProductList products={productList}/>
        </div>
    );
};

export default HomePage;