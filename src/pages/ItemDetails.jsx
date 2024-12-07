import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetails = ({ items }) => {
  const { id } = useParams(); // Get the item ID from the URL
  const item = items.find((item) => item.id === parseInt(id)); // Find the specific item
  const navigate = useNavigate(); // Hook to navigate between pages

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center">
        <p>Item not found</p>
      </div>
    );
  }

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Add to cart function (replace with actual cart logic)
  const handleAddToCart = () => {
    console.log("Item added to cart:", item, "Quantity:", quantity);
  };

  // Direct checkout function (Buy Now)
  const handleBuyNow = () => {
    console.log("Redirecting to checkout with item:", item, "Quantity:", quantity);
    navigate("/place-order", { state: { item, quantity } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate("/collection")}
          className="mb-6 text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg"
        >
          Back to Collection
        </button>

        {/* Item Name and Price */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2">
            {/* Item Image Gallery */}
            <div className="w-full h-80 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/500"
                alt={item.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-gray-600 mb-4">
              {item.description || "No description available"}
            </p>
            <p className="text-green-600 font-bold text-xl mb-4">
              Price: {item.discountPrice}
            </p>

            {/* Quantity Selector */}
            <div className="mb-6 flex items-center space-x-2">
              <label htmlFor="quantity" className="font-semibold">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-20 p-2 border rounded-lg"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 mb-4"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Enhanced Product Details Section */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b pb-4">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 font-medium w-40">Category:</span>
                <span className="text-gray-800 font-semibold">{item.category}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 font-medium w-40">Item Code:</span>
                <span className="text-gray-800 font-semibold">{item.id}</span>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 font-medium w-40">Discount Price:</span>
                <span className="text-green-600 font-bold text-lg">{item.discountPrice}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-gray-500 font-medium w-40">
                  Available Quantity:
                </span>
                <span className="text-gray-800 font-semibold">100</span>
              </div>
            </div>
          </div>

          {/* Additional Details (Optional) */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Details
            </h3>
            <p className="text-gray-600">
              This product is sourced from high-quality materials to ensure durability and long-lasting performance. Perfect for a variety of uses in your daily routine.
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.slice(0, 3).map((relatedItem) => (
              <div
                key={relatedItem.id}
                className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all"
              >
                <img
                  src="https://via.placeholder.com/200"
                  alt={relatedItem.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">
                  {relatedItem.name}
                </h4>
                <p className="text-green-600 font-bold">
                  {relatedItem.discountPrice}
                </p>
                <button
                  onClick={() => navigate(`/item/${relatedItem.id}`)} // Ensure this works
                  className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
