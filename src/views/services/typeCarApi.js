import axiosClient from "./axios";


const typeCarApi = {
    getAll(params) {
        const url = '/TypeCar/GetTypeCarAll';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/TypeCar/GetTypeCarByID/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/TypeCar/CreateTypeCar';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/TypeCar/UpdateTypeCar/${data.id}`;
        return axiosClient.get(url, data);
    },
    remove(id) {
        const url = `/TypeCar/TypeCar/DeleteTypeCar/${id}`;
        return axiosClient.delete(url);
    },

}
export default typeCarApi;