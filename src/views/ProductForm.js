import React, { useState } from "react";
import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import FormButtons from "../components/Admin/FormButtons";
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

  const [titleError, setTitleError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    if (!title.trim()) {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!imageUrl.trim()) {
      setImageError("Image URL is required");
      isValid = false;
    } else {
      setImageError("");
    }

    if (isValid) {
      handleSubmit(e);
    }
  };

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "80px" }}>
      <Navbar searchTerm={""} handleSearchChange={() => {}} />

      <div className="row no-gutters">
        <Sidebar />

        <div className="col-md-10 col-sm-12">
          <div className="p-3">
            <h3>{isEditMode ? "Edit Product" : "Create Product"}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className={`form-control ${titleError ? "is-invalid" : ""}`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {titleError && <div className="invalid-feedback">{titleError}</div>}
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  className={`form-control ${imageError ? "is-invalid" : ""}`}
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                {imageError && <div className="invalid-feedback">{imageError}</div>}
              </div>
              <FormButtons
                onSubmit={handleFormSubmit}
                onCancel={handleCancel}
                isEditMode={isEditMode}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
