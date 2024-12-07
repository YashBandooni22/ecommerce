import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the item and quantity passed from ItemDetails
  const { item, quantity } = location.state || {};

  // Redirect back to the collection if no item or quantity is passed
  if (!item || !quantity) {
    navigate("/collection");
    return null;
  }

  const handlePlaceOrder = () => {
    console.log("Order placed for:", item.name, "Quantity:", quantity);
    alert(`Order successfully placed for ${item.name} (x${quantity})!`);
    navigate("/collection"); // Redirect to the collection or homepage after placing the order
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Place Your Order</h1>

        {/* Order Summary */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>

          {/* Order Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description || "No description available"}</p>
            <p className="text-green-600 font-bold text-lg mb-4">
              Price: ₹{item.discountPrice} x {quantity}
            </p>
            <p className="text-gray-800 font-semibold text-lg">
              Total: ₹{(item.discountPrice * quantity).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg p-3"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg p-3"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-lg p-3"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="border rounded-lg p-3"
              required
            />
          </form>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
