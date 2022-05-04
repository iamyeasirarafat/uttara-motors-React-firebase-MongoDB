import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase/firebase.init';

const AddProduct = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
      return <progress className="progress mt-[20%] w-56"></progress>
    }
   const URL = 'http://localhost:5000'
    const handleAddItem = async (e) => {
        e.preventDefault();
        const uid = user.uid;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const imgUrl = e.target.imgurl.value;
        const description = e.target.details.value;
        const quantity = e.target.stock.value;
        const supliar = e.target.supliar.value;
        const specification = e.target.specification.value;
        const product = {uid, name, quantity, specification, supliar, description, price, imgUrl};
        const {data} = await axios.post(URL, product);
        e.target.reset()
        if(data.insertedId){
            toast.success('You have successfully inserted a new product')
        }
       
    }
    return (
        <div>
           <div className="md:flex justify-between my-6 w-11/12 mx-auto">
                <h2 className="md:text-left capitalize my-5  text-xl font-semibold ">Fill the Form To Add new Product: <span className="block  text-red-500">fill the form carefully it cant be undone</span> </h2>
                
                
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleAddItem}>
                            <div className="shadow text-left overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Car Name
                                            </label>
                                            <input
                                                required

                                                type="text"
                                                name="name"
                                                id="first-name"
                                              
                                                className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <input
                                                required
                                                type="number"
                                                name="price"
                                                id="last-name"
                                                
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Banner Img URL
                                            </label>
                                            <input
                                                required
                                                type="url"
                                                name="imgurl"
                                                id="email-address"
                                                
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                     

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Car Details
                                            </label>
                                            <textarea
                                                required
                                                type="text"
                                                name="details"
                                                id="street-address"
                                                
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                Stock
                                            </label>
                                            <input
                                                required
                                                type="number"
                                                name="stock"
                                                id="city"
                                                
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                Supliar Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="supliar"
                                                id="region"
                                                
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                Specification img URL
                                            </label>
                                            <input
                                                readOnly
                                                defaultValue = 'https://i.ibb.co/n1ggsY3/Ciaz-1606818729.png'
                                                type="text"
                                                name="specification"
                                                id="postal-code"
                                                
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
                                            Add Item
                                        </button>
                                </div>
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>
    );
};

export default AddProduct;