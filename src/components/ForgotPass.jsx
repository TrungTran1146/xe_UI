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
      <body className="bg-light">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg my-5">
                      <div className="card-header bg-primary">
                        <h3 className="text-white text-center font-weight-light my-4">
                          Đặt lại mật khẩu
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="small mb-3 text-muted">
                          Kiểm trả email đã đăng ký để truy cập link đặt lại mật
                          khẩu
                        </div>
                        <form onSubmit={HandleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              name="email"
                              onChange={HandleInput}
                              type="email"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="inputEmail">Địa chỉ email</label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link
                              className="small text-decoration-none"
                              to="/login"
                            >
                              Quay lại đăng nhập
                            </Link>
                            <button className="btn btn-primary">
                              Gửi đường dẫn
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
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

export default ForgotPass;
