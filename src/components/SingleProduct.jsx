import React, { useState, useEffect } from "react";

const SingleProduct = ( props ) =>{

    const productId = props.match.params.productId;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () =>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);

        const apiItem = await data.json();

        setProduct(apiItem);
    }

    console.log(product);

    return(
        <div className="flex justify-around md:flex-row flex-col p-24">
            <img src={product.image} alt={product.title} className="h-96 w-96"/>
            <div>
                <div className="p-8 font-bold text-2xl">{product.title}</div>
                <div className="p-8 pt-0 font-semibold text-lg">{product.description}</div>
                <div className="text-red-700 font-bold p-8 pt-0">$ {product.price}</div>
            </div>
        </div>
    )
}

export default SingleProduct