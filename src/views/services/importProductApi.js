import axiosClient from "./axios";


const importProductApi = {
    getAll(params) {
        const url = '/ImportProduct/GetImportProductAll';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/ImportProduct/GetImportProductByID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/ImportProduct/CreateImportProduct';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/ImportProduct/UpdateImportProduct/${data.id}`;
        return axiosClient.get(url, data);
    },
    remove(id) {
        const url = `/ImportProduct/DeleteImportProduct/${id}`;
        return axiosClient.delete(url);
    },

}
export default importProductApi;