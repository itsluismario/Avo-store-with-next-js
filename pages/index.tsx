import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
    const [productList, setProductList ] = useState<TProduct[]>([])

    useEffect(() => {
        window.fetch('/api/avo')
        .then((response) => response.json())
        .then(({data, lenght}) => {
            setProductList(data)
        })
    }, [])

    return (
        <div>
            <h1>itsluismario</h1>
            {productList.map(product => (
                <div>{product.image}</div>
            ))}
        </div>
    );
};

export default Home;