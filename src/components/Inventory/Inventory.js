import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
    const URL = `https://pure-citadel-40053.herokuapp.com/${id}`;
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(URL).then(resp => {
            setProduct(resp.data);
        });
    }, [])
    const { name, description, imgUrl, price, quantity, supliar, specification } = product;
    const handleDeliver =  (e) =>{
        e.preventDefault();
        const {quantity, ...rest} = product;
         const newQuantity = quantity - 1;
         const newQuantityString = newQuantity.toString()
         
         const newProduct = {quantity:newQuantityString, ...rest};
         console.log(newProduct);
         fetch(URL, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                toast.success('You have successfully Delivered')
               console.log(data);
            })

        
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold text-slate-600 my-7 ">{name} Details:</h2>
            <div className="md:flex items-center border-b-2">
                <img src={imgUrl} alt="" />
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>
                    <h5 className=" text-xl font-bold tracking-tight text-gray-700 dark:text-white">price: ${price}</h5>
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-500 dark:text-white">In Stock: {quantity===0 ? 'Out of Stock' : quantity}</h5>
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-500 dark:text-white">Supliar: {supliar}</h5>
                    <h5 className="mb-2 text-sm  tracking-tight text-gray-400 dark:text-white">Unique Key: {id}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                </div>
            </div>
            <h2 className="text-2xl font-semibold text-slate-600 my-7">Specification</h2>
            <img src={specification} className="w-full" alt="" />
            <div className="md:flex justify-between w-11/12 mx-auto">
                <h2 className="md:text-left capitalize my-5  text-xl font-semibold ">Fill the Form To deliver: </h2>
                <div className="">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                                <form onSubmit={handleDeliver}>
                                    <div className="shadow text-left overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        required
                                                        
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Email address
                                                    </label>
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Country
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option>Bangladesh</option>
                                                        <option>United States</option>
                                                        <option>Indiya</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                        Street address
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="street-address"
                                                        id="street-address"
                                                        autoComplete="street-address"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                        City
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        autoComplete="address-level2"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                        State / Province
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="region"
                                                        id="region"
                                                        autoComplete="address-level1"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                        ZIP / Postal code
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Deliver
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default Inventory;