import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { url } from '../redux/features/api';
import { Link } from 'react-router-dom';

const PayButton = ({ cartItems }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    fetch('https://shopzone-server.netlify.app/.netlify/functions/api', {
      //fetch('https://shopzone-app.netlify.app/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <>
      {auth._id !== '' && auth._id !== null ? (
        <button onClick={handleCheckOut}>Checkout</button>
      ) : (
        <button className="bg-yellow" onClick={() => navigate('/login')}>
          <Link to="/login">Login to Checkout</Link>
        </button>
      )}
    </>
  );
};

export default PayButton;

