import axios from "./axios";


// const productApi = {
//     getAll(params) {
//         const url = '/Product/GetProductAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/Product/GetProductByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/Product/CreateProduct';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/Product/UpdateProduct/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/Product/DeleteProduct/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default productApi;

const getAllProduct = () => {
    return axios.get("/Product/GetProductAll");
}

const getProductID = (id) => {
    return axios.get(`/Product/GetProductByID/${id}`);
}
const postCreateProduct = (name, price, status, quantity, description, image, brandId, typecarId) => {
    return axios.post(`/Product/CreateProduct`, { name, price, status, quantity, description, image, brandId, typecarId });
}
// const newProduct = {
//     name: name,
//     price: price,
//     status: status,
//     description: description,
//     image: image,
//     brandId: brandId,
//     typecarId: typecarId

// };
const putUpdateProduct = (id, name, price, status, description, image, brandId, typecarId) => {
    return axios.put(`/Product/UpdateProduct/${id}`, { name, price, status, description, image, brandId, typecarId });
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