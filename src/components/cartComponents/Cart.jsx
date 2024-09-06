import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 overflow-y-scroll max-h-96 scrollbar-hide">
            {/* ------------------------ Individual cart item ------------------------ */}
            <CartItem quantity={quantity} setQuantity={setQuantity} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md max-h-fit">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-semibold">$69.97</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
