import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router'; 
import { AuthContext } from '../Context/authContext.jsx';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'https://quiz-backend-bay-chi.vercel.app/api/login',
      { email, password }
    );

    toast.success(response.data.message);

    const token = response.data.data.accessToken; 

 
    const isLoggedIn = login(token);

    if (isLoggedIn) {
      navigate('/dashboard');
    }
  } catch (error) {
    const errorMsg = error.response?.data?.message || 'Login failed';
    toast.error(errorMsg);
  }
};

  return (
    <>
      <ToastContainer />
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-96 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <div>
                <label className='block mb-1 text-sm font-medium text-gray-700'>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div>
                <label className='block mb-1 text-sm font-medium text-gray-700'>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                  placeholder='Enter your password'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
              >
                Login
              </button>

              <p className='text-center text-sm text-gray-500'>
                Don't have an account?{' '}
                <Link to='/signup' className='text-blue-500 hover:underline'>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
