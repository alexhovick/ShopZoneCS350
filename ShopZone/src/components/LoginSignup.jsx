// import React, { useState } from 'react'
// import './LoginSignup.css'
// import email_icon from '../assets/email.png'
// import password_icon from '../assets/password.png'
// import user_icon from '../assets/person.png'


// const LoginSignup = () => {

//     const [action, setAction] = useState("Login");


//     return (
//     <div className='container'>
//         <div className='header'>
//             <div className='text'>{action}</div>
//             <div className='underline'></div>

//         </div>

//         <div className='inputs'>
//             {action==="Login"? <div></div>:
//                 <div className='input'>
//                     <img src = {user_icon} alt = {user_icon}/>
//                     <input type="text" placeholder='Username'/>
//                 </div>
                
//             }
//             <div className='input'>
//                 <img src = {email_icon} alt = {email_icon}/>
//                 <input type="email" placeholder='Email'/>
//             </div>
//             <div className='input'>
//                 <img src = {password_icon} alt = {password_icon}/>
//                 <input type="password" placeholder='Password'/>
//             </div>
//         </div>

//         {/* <div className='inputs'>
//             <div className='input'>
//                 <img src = {email_icon} alt = {email_icon}/>
//                 <input type="email" placeholder='Email'/>
//             </div>

//         <div className='inputs'>
//             <div className='input'>
//                 <img src = {password_icon} alt = {password_icon}/>
//                 <input type="password" placeholder='Password'/>
//             </div>
//         </div> */}
//         <div className="forgot-password">Forgot Password? <span>Click Here</span></div>
//         <div className="submit-container">
//             <div className={action === "Login" ? "submit gray": "submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
//             <div className={action === "Sign Up" ? "submit gray": "submit"} onClick={()=> {setAction("Login")}}>Login</div>
//         </div>
//     </div>
//   )
// }

// export default LoginSignup
import React, { useState } from 'react';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');

  return (
    <div className="container mx-auto mt-16 bg-transparent p-6 ">
      <div className="header flex flex-col items-center mt-8">
        <div className="text text-indigo-700 text-4xl font-semibold">{action}</div>
        <div className="underline w-16 h-2 bg-indigo-700 rounded-full"></div>
      </div>

      <div className="inputs mt-14 space-y-8 flex flex-col items-center justify-center">

        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
            <img src={user_icon} alt={user_icon} className="m-5" />
            <input type="text" placeholder="Username" className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg" />
          </div>
        )}

        <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
          <img src={email_icon} alt={email_icon} className="m-5" />
          <input type="email" placeholder="Email" className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg" />
        </div>

        <div className="input flex items-center bg-gray-300 rounded-lg w-96 h-20">
          <img src={password_icon} alt={password_icon} className="m-5" />
          <input type="password" placeholder="Password" className="w-64 bg-transparent border-none outline-none text-gray-700 text-lg" />
        </div>
      </div>

      <div className="forgot-password pl-14 mt-7 text-gray-700 text-lg">
        Forgot Password? <span className="text-indigo-700 cursor-pointer">Click Here</span>
      </div>

      <div className="submit-container flex justify-center gap-16 mt-14">
        <div className={`submit ${action === 'Login' ? 'bg-gray-300 text-gray-700' : 'bg-indigo-700 text-white'} w-52 h-16 flex items-center justify-center rounded-full text-lg  font-semibold cursor-pointer`} onClick={() => {setAction('Sign Up');}}>Sign Up
        </div>
    <div className={`submit ${action === 'Sign Up' ? 'bg-gray-300 text-gray-700' : 'bg-indigo-700 text-white'} w-52 h-16 flex items-center justify-center rounded-full text-lg font-semibold cursor-pointer`} onClick={() => {setAction('Login');}}>Login
    </div>
      </div>
    </div>
  );
};

export default LoginSignup;
