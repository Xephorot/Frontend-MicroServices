import React from "react";

function ProductGrid({ products, onLike }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-4" key={product._id}>
          <div className="card mb-4">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p>Likes: {product.likes}</p>
              <button
                className="btn btn-primary"
                onClick={() => onLike(product.id)}
              >
                Like
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
