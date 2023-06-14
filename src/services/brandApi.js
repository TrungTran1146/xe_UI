import axios from "./axios";




//     get(id) {
//         const url = `/Brand/GetBrandByID/${id}`;
//         return axiosClient.get(url);
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