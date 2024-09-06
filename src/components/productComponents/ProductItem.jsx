import React from "react";
import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div
      key={product.id}
      className="max-w-sm mx-auto bg-white shadow-md shadow-gray-500 rounded-lg overflow-hidden"
    >
      <img
        className="w-full h-48 object-cover"
        src={product.images[0]}
        alt={`${product.title}-image`}
      />
      <div className="p-4">
        <Link to={`/productDetails/${product.id}`}>
          <h2 className="text-xl font-semibold text-blue-600 underline hover:text-blue-900 w-fit">
            {product.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {formatePrize(product.price)}
          </span>
          <button className="px-3 py-2 bg-blue-600 text-white text-xs font-bold uppercase rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
