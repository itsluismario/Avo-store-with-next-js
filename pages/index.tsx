import React, { useEffect, useState } from "react"
import ProductList from '@components/ProductList/ProductList'


const HomePage = () => {
    const [productList, setProductList ] = useState<TProduct[]>([])

    
    useEffect(() => {
        window.fetch('/api/avo')
        .then((response) => response.json())
        .then(({data}) => {
        setProductList(data)
        })
    }, [])

    return (
        <div>
            <h1>🥑 Está muy guay</h1>
            <ProductList products={productList}/>
        </div>
    );
};

export default HomePage;