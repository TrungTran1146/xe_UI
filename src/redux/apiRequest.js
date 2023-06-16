import axios from "axios";
// import axiosInstance from "../services/axios";
import { loginFailed, loginStart, loginSuccess, registerSuccess, registerFailed, registerStart } from "./authSlice";
import { toast } from "react-toastify";


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        if (!user.name || !user.password) {
            toast.error('Vui lòng nhập thông tin để đăng nhập!');
        }

        if (user.name || user.password) {
            const res = await axios.post("/login", user);
            dispatch(loginSuccess(res.data));
            localStorage.setItem('access_token', res.data.data.token);
            localStorage.setItem('id', res.data.data.id);
            localStorage.setItem('name', res.data.data.name);

            // Redirect đến trang dành cho user phù hợp (admin hoặc người dùng)
            if (res.data.data.role === 'admin') {
                // Redirect đến trang admin
                toast.success('Đăng nhập thành công!');
                setTimeout(() => {
                    navigate("/admin");
                }, 2000);

            } else {
                // Redirect đến trang user
                toast.success('Đăng nhập thành công!');
                setTimeout(() => {
                    navigate("/");
                }, 2000);

            }
        }


    } catch (err) {
        dispatch(loginFailed());
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    console.log(user)
    try {
        if (!user.address && !user.email && !user.fullName && !user.password && !user.userName) {
            toast.warning('Vui lòng nhập thông tin để đăng nhập!');
        } else {
            await axios.post("/register", user);
            toast.success('Tạo tài khoản thành công!');
            dispatch(registerSuccess());
            navigate("/login");
        }
    }
    catch (err) {
        dispatch(registerFailed());
    }
}
