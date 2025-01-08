import { useState, useEffect } from "react";
import Loader from "../Loader";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const ProductList = () => {
  // ------------ This hook is for fetching products from API
  const { products, isLoading, error } = useFetchProducts(
    `https://dummyjson.com/products`
  );

  // ------------ State for search query and category filter ------------
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [uniqueCategories, setUniqueCategories] = useState([]);

  // ------------ Function to handle search input change ------------
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // ------------ Function to handle category selection ------------
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ------------ Filtered products based on search query and selected category ------------
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // ------------ Create unique categories array dynamically ------------
  useEffect(() => {
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setUniqueCategories(["All", ...categories]);
  }, [products]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* ----------- Search Bar and Category Dropdown ----------- */}
      <div className="flex flex-col-reverse justify-between items-center md:flex-row my-8">
        {/* ----------- Search Bar ----------- */}
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col">
          <label htmlFor="search" className="text-gray-800 text-lg">
            Search Products
          </label>
          <input
            type="text"
            id="search"
            className="px-4 py-2 w-full border border-gray-500 focus:outline-blue-400 rounded-md "
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex flex-col ml-auto mt-2 md:mt-0 md:ml-0">
          {/* ----------- Category Dropdown ----------- */}
          {/* <label className="text-lg text-gray-800 ">Filter By Categories</label> */}
          {/* <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="px-4 py-1 border border-blue-500 rounded-md focus:outline-blue-400 md:mt-0"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select> */}
        </div>
      </div>
      {/* ----------- Product List ----------- */}
      <div className="lg:flex">
        <div className="w-[15%]">
          <label className="text-2xl my-4 block">Categories</label>
          <ul className="space-y-1.5 text-sm px-4">
            {uniqueCategories.map((category) => (
              <li
                className={`cursor-pointer ${
                  selectedCategory === category && "font-semibold underline"
                }`}
                onClick={() => setSelectedCategory(category)}
                key={category}
                value={category}
              >
                {category[0].toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[85%] ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          ) : (
            <p className="text-3xl text-center">Product Not Found...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
