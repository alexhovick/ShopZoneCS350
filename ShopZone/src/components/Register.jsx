import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/slices/authSlice';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  useEffect(() => {
    if (auth._id){
         navigate('/cart')
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({
        name: username,
        email,
        password,
      })
    );
  };

  return (
    <div className="container mx-auto mt-16 bg-transparent/20 p-6 flex flex-col rounded-lg items-center justify-center " style={{ maxWidth: '700px' }}>
      <div className="header flex flex-col items-center mt-8">
        <div className="text text-indigo-700 text-4xl font-semibold">Sign Up</div>
        <div className="underline w-20 h-2 bg-indigo-700 rounded-full" />
      </div>

      <form onSubmit={handleSubmit} className="inputs mt-14 space-y-8 flex flex-col items-center">
        <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
          <img src={user_icon} alt={user_icon} className="m-5" />
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg"
          />
        </div>

        <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
          <img src={email_icon} alt={email_icon} className="m-5" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg"
          />
        </div>

        <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
          <img src={password_icon} alt={password_icon} className="m-5" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg"
          />
        </div>
        <div className='text-red-700 font-bold italic'>
        {auth.registerStatus === "rejected" ? (
          <p>{auth.registerError}</p>
        ) : null}
        </div>

        <button
          className="submit bg-indigo-700 text-white w-52 h-16 flex items-center justify-center rounded-full text-lg font-semibold cursor-pointer"
          type="submit"
        >
          Sign Up
        </button>

        <div className="forgot-password mt-7 text-white text-lg text-center">
            Already have an account? <Link to="/login" className="text-cyan-500 cursor-pointer underline">Login</Link>
        </div>

      </form>
    </div>
  );
};

export default Register;
