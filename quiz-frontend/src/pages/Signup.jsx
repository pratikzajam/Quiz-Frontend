import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast, } from 'react-toastify';
import { useNavigate } from 'react-router';

const Signup = () => {

    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });


    let handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev, [name]: value
        }))

    }

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {

            let response = await axios.post("http://localhost:3000/api/signup", {
                name: form.name,
                email: form.email,
                confirmPassword: form.confirmPassword,
                password: form.password,
                role: "user"
            })

            useNavigate('/login')


            toast(response.data.message)


        } catch (error) {
            toast(error.response.data.message)
        }
    }




    return (
        <>
            <ToastContainer />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Create an Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                name="name"
                                placeholder="Your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter a strong password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>


                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Enter a strong password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>

                        <p className="text-sm text-center mt-4 text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
