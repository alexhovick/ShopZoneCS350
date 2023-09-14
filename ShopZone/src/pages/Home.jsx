import React from 'react';
import {Header} from '../components/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {


    return (
        <div className="flex flex-col">
          <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <select></select>
          <Header />
          Home Page
          </div>
        </div>
    );
};

export default Home;