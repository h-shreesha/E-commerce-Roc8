// import React, { useEffect, useState } from 'react'
// import { PRODUCT_API } from '../../utils/constants'
import { ProductsData } from "./ProductsData";
import Product from './Product'

const Shop = () => {
    // const [product, setProduct] = useState('');
    // useEffect(() => {
    //     getProducts()
    // },[])

    // const getProducts = async () => {
    //     const data = await fetch(PRODUCT_API);
    //     const json = await data.json();
    //     setProduct(json);
    //     console.log(product);
    // };


    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-5xl p-8">ShopCart</h1>
            </div>
            <div className="flex flex-wrap gap-16 ml-20 mr-8 ">
                {ProductsData.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
}

export default Shop