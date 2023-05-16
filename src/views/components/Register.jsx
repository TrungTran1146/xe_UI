import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    username: ``,
    email: ``,
    password: ``,
  });

  const navigate = useNavigate();

  const HandleInput = (event) => {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    console.log(userRegister);
    await axios
      .post("http://localhost:5000/auth/register", userRegister)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/login");
  };
  return (
    <div>
      <body class="bg-light">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-7">
                    <div class="card shadow-lg border-0 rounded-lg my-5">
                      <div class="card-header bg-primary">
                        <h3 class="text-white text-center font-weight-light my-4">
                          Tạo tài khoản
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
                              id="inputEmail"
                              onChange={HandleInput}
                              name="email"
                              type="email"
                              placeholder="...@gmail.com"
                            />
                            <label for="inputEmail">Địa chỉ mail</label>
                          </div>
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              id="inputPassword"
                              onChange={HandleInput}
                              name="password"
                              type="password"
                              placeholder="Mật khẩu"
                            />
                            <label for="inputPassword">Mật khẩu</label>
                          </div>
                          <div class="mt-4 mb-0">
                            <div class="d-grid">
                              <button className="btn btn-primary btn-block">
                                Tạo tài khoản
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">
                        <div class="small ">
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
