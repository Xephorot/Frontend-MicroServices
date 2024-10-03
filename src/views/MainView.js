import React, { useState, useEffect } from "react";
import { getMainProducts, likeProduct } from "../controllers/mainController";
import ProductGrid from "../components/Main/ProductGrid";

function MainView() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMainProducts();
        setProducts(data);
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleLike = async (id) => {
    try {
      await likeProduct(id);
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, likes: product.likes + 1 } : product
        )
      );
    } catch (error) {
      console.error("Error liking product:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Main Product View</h2>
      <ProductGrid products={products} onLike={handleLike} />
    </div>
  );
}

export default MainView;
