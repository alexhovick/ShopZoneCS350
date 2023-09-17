import { ProductCard } from "../components";
import products from "../assets/products";

const Home = () => (
  
  <div >
    <h1 className="font-bold text-3xl text-white text-center mb-6 underline">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
    Home Page
  </div>

);
 

export default Home;