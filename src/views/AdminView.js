import React from "react";
import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";
import ProductTable from "../components/Admin/ProductTable";
import { useProducts } from "../hooks/useProductsAdmin";
import { useEditHandler } from "../hooks/useEditHandler";
import { useSearchHandler } from "../hooks/useSearchHandler";
import LoadingAndErrorHandling from "../components/Admin/LoadingAndErrorHandling";

function AdminView() {
  const { products, loading, error, searchTerm, setSearchTerm, handleDelete } =
    useProducts();
  const { handleEdit } = useEditHandler();
  const { handleSearchChange } = useSearchHandler(setSearchTerm);

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "80px" }}>
      <Navbar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <div className="row no-gutters">
        <Sidebar />

        <div className="col-md-10 col-sm-12">
          <LoadingAndErrorHandling loading={loading} error={error} />
          <div className="table-responsive">
            <ProductTable
              products={products}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
