import axios from "./axios";




const getAllProduct = () => {
    return axios.get("/Product/GetProductAll");
}

const getProductID = (id) => {
    return axios.get(`/Product/GetProductByID/${id}`);
}
const getTypeProduct = (id) => {
    return axios.get(`/Product/GetTypeProduct/${id}`);
}

const postCreateProduct = (name, price, status, quantity, description, image, brandId, typeCarId) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('quantity', quantity);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('brandId', brandId);
    formData.append('typeCarId', typeCarId);
    return axios.post(`/Product/CreateProduct`, formData);
}

const putUpdateProduct = (id, name, price, status, quantity, description, image, brandId, typeCarId) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('quantity', quantity);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('brandId', brandId);
    formData.append('typeCarId', typeCarId);
    return axios.put(`/Product/UpdateProduct/${id}`, formData);
}
const deleteProduct = (id) => {
    return axios.delete(`/Product/DeleteProduct/${id}`);
}

export {
    getAllProduct,
    getProductID,
    postCreateProduct,
    putUpdateProduct,
    deleteProduct,
    getTypeProduct
}