import { useEffect, useState } from "react";

/**
 * 
 * @param {string} url 
 * @returns Object
 */

export const useFetchProducts = (url) => {
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

                if (error instanceof TypeError) {
                    setError(`${error.message} : Please check your internet connection.`)
                }
                else {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts();
    }, [url]);
    return { products, isLoading, error }
}

