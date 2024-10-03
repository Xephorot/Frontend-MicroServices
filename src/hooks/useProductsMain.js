// src/hooks/useProducts.js

import { useState, useEffect } from "react";
import { getMainProducts, likeProduct } from "../controllers/mainController";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]); // Controlar los likes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getMainProducts();
        setProducts(data);
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLike = async (id) => {
    if (!likedProducts.includes(id)) {
      try {
        await likeProduct(id);
        setProducts(
          products.map((product) =>
            product.id === id
              ? { ...product, likes: product.likes + 1 }
              : product
          )
        );
        setLikedProducts([...likedProducts, id]);
      } catch (error) {
        console.error("Error liking product:", error);
      }
    }
  };

  return {
    products,
    likedProducts,
    loading,
    error,
    handleLike,
  };
};
