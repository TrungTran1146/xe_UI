// import axiosClient from "./axios";
import axios from "./axios";

// const importProductApi = {
//     getAll(params) {
//         const url = '/ImportProduct/GetImportProductAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/ImportProduct/GetImportProductByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/ImportProduct/CreateImportProduct';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/ImportProduct/UpdateImportProduct/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/ImportProduct/DeleteImportProduct/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default importProductApi;

const getAllImportProduct = () => {
    return axios.get("/ImportProduct/GetImportProductAll");
}
const postImportProduct = (data) => {
    return axios.post("/ImportProduct/CreateImportProduct");

}
const putImportProduct = (id,) => {
    return axios.put(`/ImportProduct/UpdateImportProduct/${id}`);
}
const deleteImportProduct = (id) => {
    return axios.delete(`/ImportProduct/DeleteImportProduct/${id}`);
}

export {
    getAllImportProduct,
    postImportProduct,
    putImportProduct,
    deleteImportProduct,
}