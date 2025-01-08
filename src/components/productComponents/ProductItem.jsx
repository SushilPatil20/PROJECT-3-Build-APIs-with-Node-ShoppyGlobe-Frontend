import { formatePrize } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div
      key={product.id}
      className="max-w-sm bg-white border hover:border-blue-300 overflow-hidden p-2 md:p-6 mx-auto"
    >
      <Link to={`/productDetails/${product.id}`}>
        <img
          className="w-[29vw] h-[32vh] mx-auto object-contain"
          src={product.images[0]}
          alt={`${product.title}-image`}
        />
      </Link>

      <div className="p-4">
        <Link to={`/productDetails/${product.id}`}>
          <h2 className="text-lg font-semibold text-blue-600 underline hover:text-blue-900 w-fit line-clamp-1">
            {product.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 line-clamp-3 text-sm">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg  font-semibold text-gray-800">
            {formatePrize(product.price)}
          </span>
          <button
            onClick={() => handleAddToCart()}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-500 hover:rounded-none text-white text-xs font-bold uppercase rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
