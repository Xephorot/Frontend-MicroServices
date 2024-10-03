import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/products';

// Obtener productos
export const getAdminProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching admin products:', error);
        throw error;
    }
};

// Eliminar producto
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

// Guardar producto (creación o edición)
export const saveProduct = async (productData, id) => {
    try {
        const url = id ? `${BASE_URL}/${id}` : BASE_URL;
        const method = id ? 'put' : 'post';
        
        const response = await axios({
            method,
            url,
            data: productData,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error saving product:', error.response ? error.response.data : error.message);
        throw error;
    }
};