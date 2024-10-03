import React from "react";
import {
  columnStyle,
  imgStyle,
  rowStyle,
  buttonMarginRight,
  buttonMarginLeft,
} from "./table-styles";

function ProductTable({ products, onDelete, onEdit }) {
  return (
    <table className="table table-striped" style={{ backgroundColor: "#fff" }}>
      <thead style={{ backgroundColor: "#f8f9fa" }}>
        <tr>
          <th scope="col" style={{ width: "5%", ...columnStyle }}>
            #
          </th>
          <th scope="col" style={{ width: "15%", ...columnStyle }}>
            Image
          </th>
          <th scope="col" style={columnStyle}>
            Title
          </th>
          <th scope="col" style={{ width: "10%", ...columnStyle }}>
            Likes
          </th>
          <th scope="col" style={{ width: "15%", ...columnStyle }}>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id} style={rowStyle}>
            <td className="align-middle">{index + 1}</td>
            <td className="align-middle">
              <img src={product.image} alt={product.title} style={imgStyle} />
            </td>
            <td className="align-middle">{product.title}</td>
            <td className="align-middle">{product.likes}</td>
            <td className="align-middle">
              <button
                className="btn btn-sm btn-outline-secondary"
                style={buttonMarginRight}
                onClick={() => onEdit(product.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                style={buttonMarginLeft}
                onClick={() => onDelete(product.id)}
              >
                Del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
