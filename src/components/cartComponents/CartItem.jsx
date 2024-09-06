import React from "react";

const CartItem = ({ quantity, setQuantity }) => {
  //   const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <img
          src="https://via.placeholder.com/100"
          alt="Product 1"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="ml-4 flex-grow">
          <h2 className="text-xl font-semibold">Product 1</h2>
          <p className="text-gray-500">$29.99</p>
        </div>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </div>

      {/* ----------------------------- Quantity controls ----------------------------- */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <p className="font-semibold">$29.99</p>
      </div>
    </div>
  );
};

export default CartItem;
