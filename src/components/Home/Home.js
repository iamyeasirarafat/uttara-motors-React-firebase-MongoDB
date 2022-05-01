import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Products from '../Product/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(' https://pure-citadel-40053.herokuapp.com/').then(resp => {
            setProducts(resp.data.slice(0,6))
        });
    }, [])
       
    return (
        <div className="">
            <Banner></Banner>
            <div className="w-9/12 mx-auto">
            <h2 className="text-center text-3xl font-semibold my-4" >Browse Our Range</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3  gap-6  mt-4">
                {
                    products.map(product =><Products key={product._id} product={product}></Products>)
                }
            </div>
            <button className="btn btn-primary w-full my-10 ">Manage all Products</button>
            </div>
        </div>
    );
};

export default Home;