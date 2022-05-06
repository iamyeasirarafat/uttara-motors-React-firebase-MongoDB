import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';
import Products from '../Product/Products';

const MyItems = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [user, loading] = useAuthState(auth);
    const URLDev = `http://localhost:5000/myitems/${user.uid}`;
    const URL = ` https://pure-citadel-40053.herokuapp.com/myitems/${user.uid}`;
    useEffect(() => {
        axios.get(URL).then(resp => {
            setProducts(resp.data)
        });
    }, []);
    if (loading) {
      return <p className='text-center text-slate-300'>initializing navbar ....</p>
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
            <button onClick={()=>navigate('/addProduct')} className=" ml-auto mt-5 mr-10 block btn-primary">Add New Product</button>
            <div className="w-9/12 mx-auto">
            <h2 className="text-center text-3xl font-semibold my-4" >Your products</h2>
           {
                products.length === 0 ? <p className="text-2xl text-center my-10 text-gray-400 w-full">You Have nothing to show please add new Product</p> :  <div className="md:grid md:grid-cols-2 lg:grid-cols-3  gap-6  mt-4">
                {
                    products.map(product =><Products handleDelete = {handleDelete} key={product._id} product={product}></Products>)
                }
            </div>
           }
           
            </div>
        </div>
    );
};

export default MyItems;