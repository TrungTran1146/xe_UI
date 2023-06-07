import axios from "./axios";




const getAllProduct = () => {
    return axios.get("/Product/GetProductAll");
}

const getProductID = (id) => {
    return axios.get(`/Product/GetProductByID/${id}`);
}
const postCreateProduct = (name, price, status, quantity, description, image, brandId, typeCarId) => {
    return axios.post(`/Product/CreateProduct`, { name, price, status, quantity, description, image, brandId, typeCarId });
}

const putUpdateProduct = (id, name, price, status, quantity, description, image, brandId, typeCarId) => {
    return axios.put(`/Product/UpdateProduct/${id}`, { name, price, status, quantity, description, image, brandId, typeCarId });
}
const deleteProduct = (id) => {
    return axios.delete(`/Product/DeleteProduct/${id}`);
}

export {
    getAllProduct,
    getProductID,
    postCreateProduct,
    putUpdateProduct,
    deleteProduct
}