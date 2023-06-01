import axiosClient from "./axios";
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
const fetchAllCart = () => {
    return axios.get("/Cart/GetCartAll");
}

const fetchCartID = (id) => {
    return axios.get(`/Cart/GetCartByID/${id}`);
}
const fetchCreateCart = (id) => {
    return axios.get(`/Cart/CreateCart`);
}
const fetchUpdateCart = (data) => {
    return axios.get(`/Cart/UpdateCart/${data.id}`);
}
const fetchDeteteCart = (id) => {
    return axios.get(`/Cart/UpdateCart/${id}`);
}

export {
    fetchAllCart,
    fetchCartID,
    fetchCreateCart,
    fetchUpdateCart,
    fetchDeteteCart
}