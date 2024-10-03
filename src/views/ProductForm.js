import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FormButtons from "../components/FormButtons";
import { useProductForm } from "../hooks/useProductForm";

function ProductForm() {
  const {
    title,
    setTitle,
    imageUrl,
    setImageUrl,
    handleSubmit,
    handleCancel,
    isEditMode,
  } = useProductForm();

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "80px" }}>
      <Navbar searchTerm={""} handleSearchChange={() => {}} />

      <div className="row no-gutters">
        <Sidebar />

        <div className="col-md-10 col-sm-12">
          <div className="p-3">
            <h3>{isEditMode ? "Edit Product" : "Create Product"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>
              <FormButtons onSubmit={handleSubmit} onCancel={handleCancel} isEditMode={isEditMode} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
