import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ cartItems, updateCart }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart); // Update the cart state
  };

  const handleProceedToCheckout = () => {
    navigate("/place-order", { state: { cartItems } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center">
        <p>Your cart is empty. Add some items!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.discountPrice}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleProceedToCheckout}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
