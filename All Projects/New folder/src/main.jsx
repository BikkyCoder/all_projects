import { useState } from 'react';
import Navigation from './components/Navigation';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    name: "Classic Timepiece",
    price: 299,
    description: "Elegant watch with leather strap"
  },
  {
    id: 2,
    name: "Sport Edition",
    price: 399,
    description: "Durable sports watch"
  }
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
