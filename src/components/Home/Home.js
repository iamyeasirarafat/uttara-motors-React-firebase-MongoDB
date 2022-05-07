import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Banner from '../Banner/Banner';
import PopularBrands from '../PopularBrands/PopularBrands';
import Products from '../Product/Products';
import ProductShowcase from '../ProductShowcase/ProductShowcase';

const Home = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [products, setProducts] = useState([])
    const displayProduct = products.slice(0, 6);
    const URLDev = `http://localhost:5000/`;
    const URL = " https://pure-citadel-40053.herokuapp.com/";
    useEffect(() => {
        axios.get(URL).then(resp => {
            setProducts(resp.data)
        });
    }, []);

    // handle user 
    ;
  if (loading) {
    return 
  }
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
            <Banner></Banner>
            <PopularBrands/>
            <div className="w-9/12 mx-auto">
                <h2 className="text-center text-3xl font-semibold my-7" >Browse Our Range</h2>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3  gap-6  mt-4">
                    {
                        displayProduct.map(product => <Products handleDelete = {handleDelete} key={product._id} product={product}></Products>)
                    }
                </div>
                {
                    user ? <div className="w-8/12 mx-auto">
                    <button onClick={() => navigate('/manageProducts')} className="btn btn-primary w-full my-10 ">Manage all Products</button>
                </div>: ''
                }
                <ProductShowcase/>
            </div>
        </div>
    );
};

export default Home;