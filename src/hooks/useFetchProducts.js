import { useEffect, useState } from "react";

const useFetchProducts = (url) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProducts();
    }, [url]);
    return { products, isLoading, error }
}

export default useFetchProducts
