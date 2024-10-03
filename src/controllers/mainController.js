import axios from "axios";

const BASE_URL = "http://localhost:8001/api/products";

// Obtener productos
export const getMainProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching main products:", error);
    throw error;
  }
};

// Like a un producto
export const likeProduct = async (id) => {
  try {
    await axios.post(`${BASE_URL}/${id}/like`);
  } catch (error) {
    console.error("Error liking product:", error);
    throw error;
  }
};
