import React, { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Context/authContext.jsx'

import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    Link
} from "react-router";




const Login = () => {

    let { login } = AuthContext();

    e.preventDefault();

    try {

        let response = await axios.post("http://localhost:3000/api/login", {
            name: form.name,
            email: form.email,
        })




        toast(response.data.message)


    } catch (error) {
        toast(error.response.data.message)
    }

}



return (
    <>
        <ToastContainer />
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='w-96 bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>


                <form onSubmit={handlesubmit}>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <label className='block mb-1 text-sm font-medium text-gray-700'>Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type='email'
                                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                                placeholder='Enter your email'
                            />
                        </div>

                        <div>
                            <label className='block mb-1 text-sm font-medium text-gray-700'>Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type='password'
                                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                                placeholder='Enter your password'
                            />
                        </div>

                        <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'>
                            Login
                        </button>

                        <p className='text-center text-sm text-gray-500'>
                            Don't have an account? <Link to='/signup' className='text-blue-500 hover:underline'>Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>
);
};

export default Login;
