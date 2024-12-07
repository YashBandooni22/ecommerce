import React from 'react'
import Hero from "../components/Hero"
import farmer from "../assets/images/banner2.jpg"
import soil from "../assets/images/soil.png"
import seed from "../assets/images/seed.png"
import tree from "../assets/images/tree.png"
import plant1 from "../assets/images/plant1.png"
import plant2 from "../assets/images/plant2.png"
import plant3 from "../assets/images/plant3.png"
import plant4 from "../assets/images/plant4.png"
import plant5 from "../assets/images/plant5.png"
import plant6 from "../assets/images/plant6.png"
import fertilzer from "../assets/images/fertilizer.png"

const Home = () => {
  return (
    <div>
      {/* <Hero/> */}



      <div className="bg-white text-black">
        {/* Hero Section */}
        <section className="relative">
  <div className="relative w-full h-[450px]">
    <img
      src={farmer}
      alt="Hero Banner"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-start pl-8 text-green-800">
      <div className="text-left max-w-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Plant for the Future
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Support local farmers
        </p>
        <p className="text-lg md:text-xl mb-6">
          Empowering and supporting local farmers for a sustainable and prosperous future, one crop at a time.
        </p>
        <a
          href="#shop"
          className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shop NOW... 
        </a>
      </div>
    </div>
  </div>
</section>






        {/* Categories Section */}
        <section className="py-16">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">
      Shop by Categories
    </h2>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Seed Category */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={seed} // Ensure this points to your image file correctly
          alt="Seed"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Seed
        </div>
      </div>

      {/* Soil Category */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={soil} // Ensure this points to your image file correctly
          alt="Soil"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Soil
        </div>
      </div>

      {/* Trees Category */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={tree} // Ensure this points to your image file correctly
          alt="Trees"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Trees
        </div>
      </div>

      {/* Crops Category */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={plant5} // Ensure this points to your image file correctly
          alt="Crops"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Crops
        </div>
      </div>

      {/* Plants Category */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={plant6} // Ensure this points to your image file correctly
          alt="Plants"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Plants
        </div>
      </div>
      <div className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer">
        <img
          src={fertilzer} // Ensure this points to your image file correctly
          alt="Crops"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center text-white text-xl font-semibold">
          Fertilizers
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Featured Products */}
        <section id="shop" className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Product 1 */}
              <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
                <img
                  src={plant1} // Image for Product 1
                  alt="Product 1"
                  className="w-full h-50% object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg">Product 1</h3>
                <p className="text-gray-600 mb-4">Category 1</p>
                <p className="font-bold text-xl">$99.99</p>
                <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>

              {/* Product 2 */}
              <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
                <img
                  src={plant2} // Image for Product 2
                  alt="Product 2"
                  className="w-full h-50% object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg">Product 2</h3>
                <p className="text-gray-600 mb-4">Category 2</p>
                <p className="font-bold text-xl">$129.99</p>
                <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>

              {/* Product 3 */}
              <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
                <img
                  src={plant3} // Image for Product 3
                  alt="Product 3"
                  className="w-full  object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg">Product 3</h3>
                <p className="text-gray-600 mb-4">Category 3</p>
                <p className="font-bold text-xl">$89.99</p>
                <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>

              {/* Product 4 */}
              <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition">
                <img
                  src={plant4} // Image for Product 4
                  alt="Product 4"
                  className="w-full h-50% object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg">Product 4</h3>
                <p className="text-gray-600 mb-4">Category 4</p>
                <p className="font-bold text-xl">$149.99</p>
                <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {Array(3)
                .fill(null)
                .map((item , index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <p className="text-gray-600 italic mb-4">
                      "This is the best eCommerce store I've ever shopped from!
                      The products are amazing and the service is unmatched."
                    </p>
                    <h4 className="font-bold text-lg">Customer {index + 1}</h4>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 bg-gradient-to-r from-black to-gray-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Explore More?</h2>
            <p className="text-lg mb-8">
              Join our community of shoppers and get exclusive deals.
            </p>
            <a
              href="#shop"
              className="px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition"
            >
              Shop Now
            </a>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Home