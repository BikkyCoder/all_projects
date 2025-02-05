import { useState } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform"
    >
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            whileHover={{ scale: 0.95 }}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
