import { useEffect, useState } from "react";



/**
 * 
 * @param {string} url 
 * @param {number} id 
 * @returns Object
 */


export const useFetchSingleProduct = (url, id = null) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(url + id);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const product = await response.json();
                setProduct(product);
            } catch (error) {
                if (error instanceof TypeError) {
                    setError(`${error.message} : Please check your internet connection.`);
                }
                else {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }
        fetchProduct();
    }, [url]);
    return { product, isLoading, error }
}

