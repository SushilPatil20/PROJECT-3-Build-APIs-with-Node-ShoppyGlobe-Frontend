import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct";

const ProductDetails = () => {
  const { id } = useParams();
  // ------------- Hook for fetching the single product from API -------------
  const { product, isLoading, error } = useFetchSingleProduct(
    "https://dummyjson.com/products/",
    id
  );
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ------------- Setting initital image -------------
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // ------------- Function to increase quantity -------------
  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  //------------- Function to decrease quantity but ensure it doesn't go below 1 -------------
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {/* Back to Home Button */}
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={() => window.history.back()}
      >
        &larr; Back to Home
      </button>

      {
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Image & Gallery */}
          <div className="lg:col-span-2">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-80 object-contain rounded-lg shadow-lg"
            />
            {/* Thumbnail Images */}
            <div className="flex mt-4 space-x-2 overflow-x-scroll scrollbar-hide">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product image ${index + 1}`}
                  className="w-24 h-24 object-contain rounded-md cursor-pointer hover:border-2 hover:border-blue-400"
                  onClick={() => setMainImage(image)} // Replace the main image
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600">
              ${product.price}
            </p>
            <p className="text-gray-500">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-gray-500">
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p className="text-gray-500">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>

            <div className="flex items-center space-x-4 mt-6">
              <p className="text-lg font-semibold">Quantity:</p>
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      }

      {/* Reviews Section */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-sm text-gray-600">{`Rating: ${review.rating}/5`}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
