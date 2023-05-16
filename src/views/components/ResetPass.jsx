import React from "react";
import { Link } from "react-router-dom";

const ResetPass = () => {
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
                          Nhập mật khẩu mới
                        </div>
                        <form>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="inputNewPass"
                              type="password"
                              placeholder="Nhập mật khẩu mới"
                            />
                            <label for="inputNewPass">Mật khẩu</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              class="form-control"
                              id="confirmNewPass"
                              type="password"
                              placeholder="Nhập mật khẩu mới"
                            />
                            <label for="confirmNewPass">
                              Xác nhận mật khẩu
                            </label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link
                              class="small text-decoration-none"
                              to="/login"
                            >
                              Quay lại đăng nhập
                            </Link>
                            <a class="btn btn-primary" href="login.html">
                              Đặt lại mật khẩu
                            </a>
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

export default ResetPass;
