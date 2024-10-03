import React from "react";
import ProductGrid from "../components/Main/ProductGrid";
import { useProducts } from "../hooks/useProductsMain";
import Navbar from "../components/Main/Navbar";

function MainView() {
  const { products, likedProducts, loading, error, handleLike } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "80px" }}>
      <Navbar />

      <div className="container" style={{ marginTop: "100px" }}>
        <ProductGrid
          products={products}
          onLike={handleLike}
          likedProducts={likedProducts}
        />
      </div>
    </div>
  );
}

export default MainView;
