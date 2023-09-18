import React from "react";
import { Link } from "react-router-dom";
import './_commonStyle.css';

const AddToCartBox = ({ product }) => {
  return (
    product && <div className="max-w-xs">
      <div className="bg-white overflow-hidden">
        <h2 className="text-gray-900 font-normal text-6xl mb-2">
          {product.title}
        </h2>
        <p className="text-black text-sm mb-2">{product.description}</p>
        <p className="text-black text-sm font-semibold italic mb-2">
          ${product.price}
        </p>
        <Link to={"/"} className="product-tumb-img">
          <div className="w-16 h-16 mt-4 border border-black p-1">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </Link>
        <div className="px-0 py-4">

          <div className="text-black text-sm mb-2">
            <div className=" flex justify-between">
                <div className="font-semibold">Size: </div>
                <div><Link className=" underline" to={'/sizeGuide'}>Size Guide</Link></div>
            </div>
            <div className="productSizePill">
              <Link to={"/size"}>XXL</Link>
              <Link to={"/size"}>XL</Link>
              <Link to={"/size"} className="active">
                L
              </Link>
              <Link to={"/size"}>M</Link>
              <Link to={"/size"}>S</Link>
            </div>
          </div>
          <div className="my-4">
          <button className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">ADD TO BAG</button>
          </div>
          
          <p className="text-black text-sm mb-2"><span className="font-semibold">Brand:</span> {product.brand}</p>
          <p className="text-black text-sm mb-2">
          <span className="font-semibold">Category:</span> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartBox;
