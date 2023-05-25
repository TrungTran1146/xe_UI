import axiosClient from "./axios";


const productApi = {
    getAll(params) {
        const url = '/Product/GetProductAll';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/Product/GetProductByID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/Product/CreateProduct';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/Product/UpdateProduct/${data.id}`;
        return axiosClient.get(url, data);
    },
    remove(id) {
        const url = `/Product/DeleteProduct/${id}`;
        return axiosClient.delete(url);
    },

}
export default productApi;