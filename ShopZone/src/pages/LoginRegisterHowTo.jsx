import React from 'react';
import loginScreenshot from '../assets/shopzoneLoginExample.png';
import registerScreenshot from '../assets/shopzoneRegisterExample.png';
import { Link } from 'react-router-dom';

const LoginRegisterHowTo = () => {
  return (
    <div className="bg-black bg-opacity-20 p-8 rounded-lg">
      <div className="text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Login and Register</h2>
        <div className="flex justify-between">
          {/* Login Instructions */}
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2">Login</h3>
            <ol className="text-lg list-inside ml-[100px]">
              <li className="mb-2 flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226; Visit the login page.
              </li>
              <li className="mb-2 flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226; Enter your username and password.
              </li>
              <li className="flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226; Click the 'Login' button to access your account.
              </li>
            </ol>
            <img src={loginScreenshot} alt="Login Example" className="max-w-[750px] mx-auto mt-4" />
          </div>

          {/* Register Instructions */}
          <div className="w-1/2">
            <h3 className="text-xl font-bold mb-2">Register</h3>
            <ol className="text-lg list-inside ml-[100px]">
              <li className="mb-2 flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226;  Access the registration page.
              </li>
              <li className="mb-2 flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226;  Fill in the required details in the form.
              </li>
              <li className="flex items-start">
                <div className="w-6 mr-2">
                </div>
                &#8226;  Click 'Submit' to create your account.
              </li>
            </ol>
            <img src={registerScreenshot} alt="Register Example" className="max-w-[750px] mx-auto mt-4" />
          </div>
          
        </div>
      </div>
      {/* About Link */}
      <div className='flex justify-center items-center'>
          <Link to="/about" className='text-center bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full'>
            About
          </Link>
      </div>
    </div>
  );
};

export default LoginRegisterHowTo;



