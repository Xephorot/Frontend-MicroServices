import React from "react";
import { cardStyle, imgStyle } from "./productGrid-styles";

function ProductGrid({ products, onLike, likedProducts }) {
  return (
    <div className="row justify-content-center">
      {products.map((product) => (
        <div
          className="col-sm-6 col-md-4 d-flex justify-content-center"
          key={product._id}
        >
          <div className="card mb-4" style={cardStyle}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={imgStyle}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{product.title}</h5>
              <p>Likes: {product.likes}</p>
              <button
                className="btn btn-primary"
                onClick={() => onLike(product.id)}
                disabled={likedProducts.includes(product.id)}
              >
                {likedProducts.includes(product.id) ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
