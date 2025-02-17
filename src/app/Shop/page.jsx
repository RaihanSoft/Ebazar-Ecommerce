'use client'
import { useState } from "react";
import { FaHeart, FaShoppingCart, FaFilter } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Big Potatos",
    price: "$14.99",
    image: "https://via.placeholder.com/200",
    rating: 4,
    outOfStock: false,
  },
  {
    id: 2,
    name: "Chanise Cabbage",
    price: "$14.99",
    image: "https://via.placeholder.com/200",
    rating: 4,
    outOfStock: false,
  },
  {
    id: 3,
    name: "Ladies Finger",
    price: "$14.99",
    oldPrice: "$20.99",
    image: "https://via.placeholder.com/200",
    rating: 4,
    outOfStock: true,
  },
];

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [sortBy, setSortBy] = useState("Latest");

  return (
    <div className="flex p-6 bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
        <button className="flex items-center gap-2 px-4 py-2 mb-4 text-white bg-green-600 rounded-md">
          <FaFilter /> Filter
        </button>
        <h3 className="mb-2 text-lg font-semibold">All Categories</h3>
        <ul className="mb-4 space-y-2">
          {["Fresh Fruit", "Vegetables", "Cooking", "Snacks", "Beverages"].map(
            (category) => (
              <li key={category}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  {category}
                </label>
              </li>
            )
          )}
        </ul>

        <h3 className="mb-2 text-lg font-semibold">Price</h3>
        <input type="range" className="w-full" min="50" max="1500" />
      </div>

      {/* Product Listing */}
      <div className="w-3/4 p-4">
        {/* Sorting */}
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">52 Results Found</span>
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative p-4 bg-white rounded-lg shadow-md ${
                product.outOfStock ? "opacity-60" : "border-2 border-green-500"
              }`}
            >
              {/* Out of Stock Badge */}
              {product.outOfStock && (
                <span className="absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white bg-black rounded">
                  Out of Stock
                </span>
              )}

              <img src={product.image} alt={product.name} className="w-full" />

              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">
                {product.price}{" "}
                {product.oldPrice && (
                  <span className="line-through text-red-500">
                    {product.oldPrice}
                  </span>
                )}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mt-2 text-yellow-500">
                {"⭐".repeat(product.rating)}
              </div>

              {/* Icons */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-red-200">
                  <FaHeart />
                </button>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
