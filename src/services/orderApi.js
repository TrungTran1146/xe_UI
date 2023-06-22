// import axiosClient from "./axios";

import axios from "./axios";

// const orderApi = {
//     getAll(params) {
//         const url = '/Order/GetOrderAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/Order/GetOrderByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/Order/CreateOrder';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/Order/UpdateOrder/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/Order/DeleteOrder/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default orderApi;

const apiGetAllOrder = () => {
    return axios.get("/Order/GetOrderAll");
}

const getOrderPage = (page) => {
    return axios.get(`/Order/orders/paged?page=${page}&pageSize=${8}`);
}

const apiGetOrderID = (id) => {
    return axios.get(`/Order/GetOrderByID/${id}`);
}

const apiPostOrder = (userId, nameUser, name, phone, address, date, status, quantity, totalOrder) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('nameUser', nameUser);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('date', date);
    formData.append('status', status);
    formData.append('quantity', quantity);
    formData.append('totalOrder', totalOrder);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    return axios.post("/Order/CreateOrder", data);
}


const apiPutOrder = (id, userId, nameUser, name, phone, address, date, status, quantity, totalOrder) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('nameUser', nameUser);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('date', date);
    formData.append('status', status);
    formData.append('quantity', quantity);
    formData.append('totalOrder', totalOrder);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    return axios.put(`/Order/UpdateOrder/${id}`, data);

}
const apiDeleteOrder = (id) => {
    return axios.delete(`/Order/DeleteOrder/${id}`);
}

export { apiGetAllOrder, apiGetOrderID, apiPostOrder, apiPutOrder, apiDeleteOrder, getOrderPage }