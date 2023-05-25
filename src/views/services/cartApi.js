import axiosClient from "./axios";


const cartApi = {
    getAll(params) {
        const url = '/Cart/GetCartAll';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/Cart/GetCartByID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/Cart/CreateCart';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/Cart/UpdateCart/${data.id}`;
        return axiosClient.get(url, data);
    },
    remove(id) {
        const url = `/Cart/DeleteCart/${id}`;
        return axiosClient.delete(url);
    },

}
export default cartApi;