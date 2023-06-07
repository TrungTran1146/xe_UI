import axios from "./axios";



// const brandApi = {
//     getAll(params) {
//         const url = '/Brand/GetBrandAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/Brand/GetBrandByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/Brand/CreateBrand';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/Brand/UpdateBrand/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/Brand/DeleteBrand/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default brandApi;


const getAllBrand = () => {
    return axios.get("/Brand/GetBrandAll");
}

const postBrand = (brandName, description) => {
    return axios.post("/Brand/CreateBrand", { brandName, description });
}
const putBrand = (id, brandName, description) => {
    return axios.put(`/Brand/UpdateBrand/${id}`, { brandName, description })
}
const deleteBrand = (id) => {
    return axios.delete(`/Brand/DeleteBrand/${id}`);
}

export {
    getAllBrand,
    postBrand,
    putBrand,
    deleteBrand
}