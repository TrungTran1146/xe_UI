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
const postCreateProduct = (product) => {
    return axios.post(`/Product/CreateProduct`);
}

const putUpdateProduct = (data) => {
    return axios.put(`/Product/UpdateProduct/${data.id}`);
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