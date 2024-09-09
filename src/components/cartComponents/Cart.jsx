import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelectors";
import { formatePrize } from "../../utils/helpers";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <p className="text-center text-gray-600 text-4xl mt-12">
        Your cart is empty !
      </p>
    );
  }

  const handleRemovecart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className=" bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 overflow-y-scroll max-h-96 scrollbar-hide">
            {/* ------------------------ Individual cart item ------------------------ */}
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                item={cart}
                onRemove={() => handleRemovecart(cart.id)}
                onIncrease={() => handleIncreaseQuantity(cart.id)}
                onDecrease={() => handleDecreaseQuantity(cart.id)}
              />
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md max-h-fit">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-semibold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-semibold">
                {formatePrize(cartItemsTotal)}
              </span>
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
