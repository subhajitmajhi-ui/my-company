import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <img className="max-w-sm h-40 w-full object-cover" src={product.thumbnail} alt={product.title} />
      <div className="px-6 py-4 pb-24">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-black text-base">${product.price.toFixed(2)}</p>
      </div>
      <div className="px-6 py-4 absolute bottom-0">
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/product/${product.id}`)}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
