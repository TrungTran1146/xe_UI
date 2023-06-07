// import axiosClient from "./axios";
import axios from "./axios";

// const typeCarApi = {
//     getAll(params) {
//         const url = '/TypeCar/GetTypeCarAll';
//         return axiosClient.get(url, { params });
//     },
//     get(id) {
//         const url = `/TypeCar/GetTypeCarByID/${id}`;
//         return axiosClient.get(url);
//     },
//     add(data) {
//         const url = '/TypeCar/CreateTypeCar';
//         return axiosClient.post(url, data);
//     },
//     update(data) {
//         const url = `/TypeCar/UpdateTypeCar/${data.id}`;
//         return axiosClient.get(url, data);
//     },
//     remove(id) {
//         const url = `/TypeCar/TypeCar/DeleteTypeCar/${id}`;
//         return axiosClient.delete(url);
//     },

// }
// export default typeCarApi;

const getAllTypeCar = () => {
    return axios.get("/TypeCar/GetTypeCarAll");
}
const getTypeCarId = (id) => {
    return axios.get(`/TypeCar/GetTypeCarByID/${id}`);
}

const postTypeCar = (nameType, description) => {
    return axios.post('/TypeCar/CreateTypeCar', { nameType, description })
}

const deleteTypeCar = (id) => {
    return axios.delete(`/TypeCar/DeleteTypeCar/${id}`);
}

export { getAllTypeCar, getTypeCarId, postTypeCar, deleteTypeCar }