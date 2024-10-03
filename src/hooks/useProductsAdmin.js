import { useState, useEffect } from "react";
import { getAdminProducts, deleteProduct } from "../controllers/adminController";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAdminProducts();
        setProducts(data);
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    products: filteredProducts,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    handleDelete,
  };
}
