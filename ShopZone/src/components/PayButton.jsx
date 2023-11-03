import axios from 'axios';
import {useSelector} from 'react-redux';
import {url} from "../redux/features/api";


const PayButton = ({cartItems}) => {
    console.log("stringed cart data: ",cartItems);
    const handleCheckOut = () => {
        fetch('http://localhost:5500/create-checkout-session', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
            //console.log(url); // Log "Hi" to the console
            window.location = url
          })
          .catch((e) => {
            console.error(e.error);
          });
      };
      
      return (
        <div>
          <button onClick={() => handleCheckOut()}>Checkout</button>
        </div>
      );
      
    }

export default PayButton;

