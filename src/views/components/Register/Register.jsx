import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/apiRequest";
import "./Register.css";
const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isAdmin, setAdmin] = useState('false');
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleRegister = async (event) => {
    event.preventDefault();
    const newUser = {
      userName: username,
      password: password,
      email: email,
      fullName: fullname,
      address: address,

    }
    registerUser(newUser, dispatch, navigate);

  };
  return (
    <div>
      <body className="register bg-light">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg my-5">
                      <div className="card-header bg-primary">
                        <h3 className="text-white text-center font-weight-light my-4">
                          Tạo tài khoản
                        </h3>
                      </div>
                      <div className="card-body">
                        {/* form dang ki */}
                        <form onSubmit={handleRegister}>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputName"
                              onChange={(e) => setUsername(e.target.value)}
                              name="username"
                              type="text"
                              placeholder="Tên đăng nhập"
                            />
                            <label htmlFor="inputName">Tên đăng nhập</label>

                          </div>
                          {/* gmail */}
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              onChange={(e) => setEmail(e.target.value)}
                              name="email"
                              type="email"
                              placeholder="...@gmail.com"
                            />
                            <label htmlFor="inputEmail">Địa chỉ mail</label>
                          </div>
                          {/* full name */}
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputFullName"
                              onChange={(e) => setFullName(e.target.value)}
                              name="fullName"
                              type="text"
                              placeholder="Họ Và Tên"
                            />
                            <label htmlFor="inputFullName">Họ và Tên</label>
                          </div>
                          {/* dia chi */}
                          <div className="form-floating mb-3 ">
                            <input
                              className="form-control"
                              id="inputAddress"
                              onChange={(e) => setAddress(e.target.value)}
                              name="Address"
                              type="text"
                              placeholder="Địa chỉ"
                            />
                            <label htmlFor="inputPassword">Địa chỉ</label>
                          </div>
                          {/* mat khau */}
                          <div className="form-floating mb-3 mb-md-0">
                            <input
                              className="form-control"
                              id="inputPassword"
                              onChange={(e) => setPassword(e.target.value)}
                              name="password"
                              type="password"
                              placeholder="Mật khẩu"
                            />
                            <label htmlFor="inputPassword">Mật khẩu</label>
                          </div>
                          {/* nut tao */}
                          <div className="mt-4 mb-0">
                            <div className="d-grid">
                              <button className="btn btn-primary btn-block">
                                Tạo tài khoản
                              </button>
                            </div>
                          </div>
                          {/* den dang nhap */}
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small ">
                          <Link className="text-decoration-none" to="/login">
                            Đã có tài khoản? Đi đến đăng nhập
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

export default Register;
