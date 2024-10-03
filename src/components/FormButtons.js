import React from "react";

function FormButtons({ onSubmit, onCancel, isEditMode }) {
  return (
    <div className="d-flex">
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "20px", paddingRight: "15px", paddingLeft: "15px", marginRight: "20px" }}
        onClick={onSubmit}
      >
        {isEditMode ? "Update" : "Save"}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ paddingRight: "15px", paddingLeft: "15px", marginTop: "20px" }}
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
}

export default FormButtons;
