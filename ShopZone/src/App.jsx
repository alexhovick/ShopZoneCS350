import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header, Register} from './components';
import { Cart, Checkout, Home, ProductDetails, SearchResults, Orders, CheckoutSuccess, Login, About, SearchHowTo, LoginRegisterHowTo, CartHowTo, ProductDetailsHowTo, CheckoutHowTo,} from './pages';

const App = () => {

  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-[#001219] to-[#214756]">
        <Header />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />

              <Route path="/About" element={<About />} />
              <Route path="/About/SearchHowTo" element={<SearchHowTo />} />
              <Route path="/About/CartHowTo" element={<CartHowTo />} />
              <Route path="/About/ProductDetailsHowTo" element={<ProductDetailsHowTo />} />
              <Route path="/About/CheckoutHowTo" element={<CheckoutHowTo />} />
              <Route path="/About/LoginRegisterHowTo" element={<LoginRegisterHowTo />} />
              <Route path="/Product/:asinToFind" element={<ProductDetails />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Search/:searchTerm" element={<SearchResults />} />
              <Route path="/Checkout-Success" element={<CheckoutSuccess/>} /> 
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
