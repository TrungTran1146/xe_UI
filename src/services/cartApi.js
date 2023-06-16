

import axios from "./axios";

// const cartApi = {
//     getAll(params) {
//         const url = '/Cart/GetCartAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/Cart/GetCartByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/Cart/CreateCart';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/Cart/UpdateCart/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/Cart/DeleteCart/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default cartApi;
const getAllCart = () => {
    return axios.get("/Cart/GetCartAll");
}

const getCartID = (id) => {
    return axios.get(`/Cart/GetCartByID/${id}`);
}
const postCreateCart = (userId, quantity, productId, name, image, price) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('quantity', quantity);
    formData.append('productId', productId);
    formData.append('name', name);
    formData.append('image', image);
    formData.append('price', price);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });

    return axios.post("/Cart/CreateCart", data);
}
const putUpdateCart = (id) => {
    return axios.put(`/Cart/UpdateCart/${id}`);
}

const deleteCart = (id) => {
    return axios.delete(`/Cart/DeleteCart/${id}`);
}

export {
    getAllCart,
    postCreateCart,
    deleteCart,
    putUpdateCart,
    getCartID
}