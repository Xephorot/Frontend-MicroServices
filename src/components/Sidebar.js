import React from "react";

function Sidebar() {
  return (
    <div
      className="col-md-2 bg-light p-3 d-none d-md-block"
      style={{ height: "100vh", position: "sticky", top: "80px" }}
    >
      <h5>Products</h5>
    </div>
  );
}

export default Sidebar;
