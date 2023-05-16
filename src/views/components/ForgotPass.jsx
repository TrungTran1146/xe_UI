import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ForgotPass = () => {
  const [userForgot, setUserForgot] = useState({
    email: ``,
  });

  const navigate = useNavigate();

  const HandleInput = (event) => {
    setUserForgot({
      ...userForgot,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    console.log(userForgot);
    await axios
      .post("http://localhost:5000/auth/forgot", userForgot)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    navigate("/reset");
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
                          Đặt lại mật khẩu
                        </h3>
                      </div>
                      <div class="card-body">
                        <div class="small mb-3 text-muted">
                          Kiểm trả email đã đăng ký để truy cập link đặt lại mật
                          khẩu
                        </div>
                        <form onSubmit={HandleSubmit}>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputEmail"
                              name="email"
                              onChange={HandleInput}
                              type="email"
                              placeholder="name@example.com"
                            />
                            <label for="inputEmail">Địa chỉ email</label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link
                              class="small text-decoration-none"
                              to="/login"
                            >
                              Quay lại đăng nhập
                            </Link>
                            <button class="btn btn-primary">
                              Gửi đường dẫn
                            </button>
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

export default ForgotPass;
