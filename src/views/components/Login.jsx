import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Navbar.css';
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: ``,
    password: ``,
  });

  const navigate = useNavigate();

  const HandleInput = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    console.log(userLogin);
    await axios
      .post("http://localhost:5000/auth/login", userLogin)
      .then((response) => {
        console.log(response.data.accessToken);
        axios.interceptors.request.use((config) => {
          const token = response.data.accessToken;
          config.headers.Authorization = token;
          return config;
        });
      })
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div>
      <body class="bg-light">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg my-5">
                      <div class="card-header bg-primary">
                        <h3 class="text-white text-center font-weight-light my-4">
                          Đăng nhập
                        </h3>
                      </div>
                      <div class="card-body">
                        <form onSubmit={HandleSubmit}>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputName"
                              onChange={HandleInput}
                              name="username"
                              type="text"
                              placeholder="Tên đăng nhập"
                            />
                            <label for="inputName">Tên đăng nhập</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputPassword"
                              onChange={HandleInput}
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                            <label for="inputPassword">Mật khẩu</label>
                          </div>
                          <div class="form-check mb-3">
                            <input
                              class="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              class="form-check-label"
                              for="inputRememberPassword"
                            >
                              Ghi nhớ
                            </label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link
                              class="small text-decoration-none"
                              to="/forgot"
                            >
                              Quên mật khẩu?
                            </Link>
                            <button class="btn btn-primary">Đăng nhập</button>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">
                        <div class="small">
                          <Link className="text-decoration-none" to="/register">
                            Chưa có tài khoản? Tạo tài khoản!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
