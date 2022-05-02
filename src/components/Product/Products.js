import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const Products = ({ product }) => {
    const {_id, name, description, imgUrl, price, quantity, supliar } = product;
    const [user, loading] = useAuthState(auth);
  if (loading) {
    return <progress className="progress mt-[20%] w-56"></progress>
  }

    return (
        <div >
            <div className="max-w-sm h-[500px] mb-6 relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg" src={imgUrl} alt="" />
                </a>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <h5 className=" text-xl font-bold tracking-tight text-gray-700 dark:text-white">price: ${price}</h5>
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-500 dark:text-white">{quantity===0 ? 'Out of Stock' : `In Stock:  ${quantity}`}</h5>
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-500 dark:text-white">Supliar: {supliar}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                   <div className="absolute bottom-4 ">
                   <Link to={`/inventory/${_id}`} className="inline-flex  items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                        Proceed to Deliver
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    {
                        user ? <button className="btn ml-20 btn-circle  btn-ghost bg-rose-400"><i className="fa-solid text-xl  fa-trash-can"></i></button> : ''
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Products;