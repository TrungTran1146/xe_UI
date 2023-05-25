import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"
// import axios from "axios";

import { login } from "../../services/auth";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogin = (e) => {
    //tránh loang lại trang
    e.preventDefault();
    const newUser = {
      username: username,
      password: password
    };
    loginUser(newUser, dispatch, navigate);
    //login(newUser, navigate);

  }
  return (
    <div>
      <body className="login bg-light">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg my-5">
                      <div className="card-header bg-primary">
                        <h3 className="text-white text-center font-weight-light my-4">
                          Đăng nhập
                        </h3>
                      </div>
                      <div className="card-body">
                        {/* ten đang nhap */}
                        <form onSubmit={handleLogin}>
                          <div className="form-floating mb-3">
                            <input className="form-control"
                              id="inputName"
                              onChange={(e) => setUserName(e.target.value)}
                              name="username"
                              type="text"
                              placeholder="Tên đăng nhập"
                            />
                            <label htmlFor="inputName">Tên đăng nhập</label>
                          </div>
                          {/* mat khau */}
                          <div className="form-floating mb-3">
                            <input className="form-control"
                              id="inputPassword"
                              onChange={(e) => setPassword(e.target.value)}
                              name="password"
                              type="password"
                              placeholder="Password"
                            />
                            <label htmlFor="inputPassword">Mật khẩu</label>
                          </div>

                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inputRememberPassword"
                            >
                              Ghi nhớ
                            </label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">

                            {/*nut Dang nhap */}
                            <button className="btn btn-primary">Đăng nhập</button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        {/* dang ky */}
                        <div className="small">
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
