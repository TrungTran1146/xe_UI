import axiosClient from "./axios";


const orderApi = {
    getAll(params) {
        const url = '/Order/GetOrderAll';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/Order/GetOrderByID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/Order/CreateOrder';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/Order/UpdateOrder/${data.id}`;
        return axiosClient.get(url, data);
    },
    remove(id) {
        const url = `/Order/DeleteOrder/${id}`;
        return axiosClient.delete(url);
    },

}
export default orderApi;