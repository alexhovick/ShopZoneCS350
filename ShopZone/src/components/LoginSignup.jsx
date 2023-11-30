import React, { useState } from 'react';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState(''); // State for username input
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  const handleActionChange = (newAction) => {
    setAction(newAction);
    setUsername(''); // Reset username input
    setEmail(''); // Reset email input
    setPassword(''); // Reset password input
  };

  return (
    <div className="container mx-auto mt-16 bg-transparent/20 p-6 flex flex-col  rounded-lg items-center justify-center ">
      <div className="header flex flex-col items-center mt-8">
        <div className="text text-indigo-700 text-4xl font-semibold">{action}</div>
        <div className="underline w-20 h-2  bg-indigo-700 rounded-full" />
      </div>

      <div className="inputs mt-14 space-y-8 flex flex-col items-center">
        {action === 'Login' ? (
          <div />
        ) : (
          <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
            <img src={user_icon} alt={user_icon} className="m-5" />
            <input
              key={action} // Add the key attribute here
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg"
            />
          </div>
        )}

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
      </div>

      <div className="forgot-password mt-7 text-white text-lg text-center">
        Forgot Password? <span className="text-cyan-500 cursor-pointer underline">Click Here</span>

        
      </div>

      <div className="submit-container flex justify-center gap-16 mt-14">
        <div
          className={`submit ${action === 'Login' ? 'bg-gray-300 text-gray-700' : 'bg-indigo-700 text-white'} w-52 h-16 flex items-center justify-center rounded-full text-lg font-semibold cursor-pointer`}
          onClick={() => {
            handleActionChange('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={`submit ${action === 'Sign Up' ? 'bg-gray-300 text-gray-700' : 'bg-indigo-700 text-white'} w-52 h-16 flex items-center justify-center rounded-full text-lg font-semibold cursor-pointer`}
          onClick={() => {
            handleActionChange('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
