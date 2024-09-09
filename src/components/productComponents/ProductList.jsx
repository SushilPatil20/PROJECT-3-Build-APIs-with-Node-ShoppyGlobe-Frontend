import Loader from "../Loader";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts(
    `https://dummyjson.com/products`
  );
  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  // beauty
  // fragrances
  // furniture
  // groceries

  return (
    <>
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-7">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
