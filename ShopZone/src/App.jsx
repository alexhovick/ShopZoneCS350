import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Cart, Checkout, Home, Login, ProductDetails, SearchResults, Orders} from './pages';

const App = () => {

  return (
    <div className="relative flex">
      {/* <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]"> */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#266170]">
        <Header />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Product/:asinToFind" element={<ProductDetails />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Search/:searchTerm" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
