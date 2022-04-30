import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Products from '../Product/Products';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(' https://pure-citadel-40053.herokuapp.com/').then(resp => {
            setProducts(resp.data)
        });
    }, [])
       
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-3xl font-semibold my-4" >Browse Our Range</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-6  mt-4">
                {
                    products.map(product =><Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;