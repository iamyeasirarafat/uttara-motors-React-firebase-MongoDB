import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import Products from '../Product/Products';

const ManageProducts = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const URLDev = `http://localhost:5000/`;
    const URL = " https://pure-citadel-40053.herokuapp.com/";
    useEffect(() => {
        axios.get(URL).then(resp => {
            setProducts(resp.data)
        });
    }, []);

    // handle delete button 
    const handleDelete = async (id) => {
      
      if(window.confirm('Are you sure you want to delete?')){
        const {status} = await axios.delete(`https://pure-citadel-40053.herokuapp.com/${id}`);
        if(status === 200) {
            toast.success('You have successfully deleted')
            const rest = products.filter(product => product._id !== id);
            setProducts(rest)
        }

      }
      

    }
       
    return (
        <div className="">
            <button onClick={()=>navigate('/addProduct')} className=" float-right mr-10  btn-primary">Add New Product</button>
            <div className="w-9/12 mx-auto">
            <h2 className="text-center text-3xl font-semibold my-4" >Browse Our Range</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3  gap-6  mt-4">
                {
                    products.map(product =><Products handleDelete = {handleDelete} key={product._id} product={product}></Products>)
                }
            </div>
           
            </div>
        </div>
    );
};

export default ManageProducts;