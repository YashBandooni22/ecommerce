import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Collection = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  // Categories for the sidebar filter
  const categories = ["All", "Crops", "Seed", "Plant", "Tree", "Soil", "Fertilizer"];

  // Filter items based on selected category and search query
  const filteredItems = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Paginate the filtered items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  // Total pages for pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "All" : category);
    setCurrentPage(1); // Reset to page 1 when filtering
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col">
      {/* Search Bar */}
      <div className="mb-6 w-full flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none"
          placeholder="Search items..."
        />
        <button
          onClick={() => setCurrentPage(1)} // Trigger filtering on search
          className="ml-4 w-32 text-gray-600 px-6 py-2 rounded-lg bg-green-200 hover:bg-green-600 hover:text-white active:bg-green-600 active:text-white focus:outline-none transition-all"
        >
          Search
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6">Our Collection</h1>

      {/* Main Content (Sidebar Filter and Collection Grid) */}
      <div className="flex">
        {/* Sidebar Filter */}
        <aside className="w-1/4 p-2 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-2">Filter by Category</h2>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left p-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? "bg-green-600 text-white" // Active category
                      : "bg-gray-100 text-gray-600 hover:bg-green-200"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Collection Grid */}
        <section className="flex-1 ml-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/item/${item.id}`)} // Navigate to the item's details page
                className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-lg cursor-pointer transition-all"
              >
                <div className="w-full h-60 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  {/* Placeholder for image */}
                  <span className="text-gray-400 text-sm">Image</span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-green-600 font-bold">{item.discountPrice}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-4 py-2 mx-2 rounded-lg transition-all ${
                  currentPage === pageNumber
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 hover:bg-green-200 hover:text-gray-600"
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collection;
