import React from 'react';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <p className='text-white text-4xl font-bold text-center p-8'>Sorry, that's not working right now :(</p>
      <p className='text-3xl text-white text-center italic mb-8'>Sorry for the inconvenience</p>

      <div className='flex justify-center items-center pt-8'>
        <button
          onClick={handleNavigate}
          className="bg-blue-600 text-white font-bold text-xl rounded-full px-9 py-4 hover:bg-blue-700"
        >
          Back to Store
        </button>
      </div>
    </div>
  );
};

export default Orders;
