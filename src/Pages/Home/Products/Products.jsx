import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products,setProducts] = useState([]);
    const baseUrl = 'products.json'
    useEffect(()=>{
        fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(result => setProducts(result))
    },[])
    return (
        <div className="my-32" >
            <div className="text-center space-y-3">
                <h3 className="lg:text-3xl text-2xl text-red-500 font-bold">Popular Products</h3>
                <h1 className="lg:text-5xl text-4xl font-bold">Browse Our Products</h1>
                <p className="capitalize ">
                the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which do not look even slightly believable. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-[50px]">
                {
                    products.map(product => <Product
                    key={product.product_id}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500 hover:text-white">More Products</button>

            </div>
            
        </div>
    );
};

export default Products;