import axios from "axios";
// import axiosInstance from "../services/axios";
import { loginFailed, loginStart, loginSuccess, registerSuccess, registerFailed, registerStart } from "./authSlice";


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/login", user);

        dispatch(loginSuccess(res.data));
        console.table(res.data);
        // localStorage.setItem("tokens",  JSON.stringify(res.data));
        // setUser(jwt_decode(res.data.access_token));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    }
    catch (err) {
        dispatch(registerFailed());
    }
}
