import { useState, useEffect } from "react";
import { saveProduct, getAdminProducts } from "../controllers/adminController";
import { useNavigate, useParams } from "react-router-dom";

export function useProductForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const products = await getAdminProducts();
          const product = products.find((p) => p.id === parseInt(id));
          if (product) {
            setTitle(product.title);
            setImageUrl(product.image);
          }
        } catch (error) {
          console.error("Error fetching product for editing:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !imageUrl.trim()) {
      alert("Both title and image URL are required!");
      return;
    }

    try {
      const productData = { title, image: imageUrl };
      await saveProduct(productData, id);
      navigate("/admin");
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleCancel = () => {
    navigate("/admin");
  };

  return {
    title,
    setTitle,
    imageUrl,
    setImageUrl,
    handleSubmit,
    handleCancel,
    isEditMode: !!id,
  };
}
