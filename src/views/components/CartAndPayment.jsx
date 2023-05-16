import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CartAndPayment = () => {
  return (
    <div>
      <section class="h-100 h-custom" style={{ backgroundColor: `#eee` }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col-lg-7">
                      <h5 class="mb-3">
                        <a
                          href="#!"
                          class="text-body text-decoration-none"
                          style={{ fontWeight: `bold` }}
                        >
                          <FontAwesomeIcon icon={faLeftLong} className="me-2" />
                          Tiếp tục mua sắm
                        </a>
                      </h5>
                      <hr />

                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1">Giỏ hàng</p>
                          {/* <p class="mb-0">Bạn đang có 4 sản phẩm trong giỏ hàng</p> */}
                        </div>
                        <div>
                          <p class="mb-0">
                            <span class="text-muted">Sắp xếp theo:</span>{" "}
                            <a href="#!" class="text-body text-decoration-none">
                              Mức giá{" "}
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                className="mt-1"
                              />
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: `65px` }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p class="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: `50px` }}>
                                <h5 class="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: `80px` }}>
                                <h5 class="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: `#cecece` }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: `65px` }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Samsung galaxy Note 10 </h5>
                                <p class="small mb-0">256GB, Navy Blue</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: `50px` }}>
                                <h5 class="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: `80px` }}>
                                <h5 class="mb-0">$900</h5>
                              </div>
                              <a href="#!" style={{ color: `#cecece` }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: `65px` }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>Canon EOS M50</h5>
                                <p class="small mb-0">Onyx Black</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: `50px` }}>
                                <h5 class="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: `80px` }}>
                                <h5 class="mb-0">$1199</h5>
                              </div>
                              <a href="#!" style={{ color: `#cecece` }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-3 mb-lg-0">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: `65px` }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>MacBook Pro</h5>
                                <p class="small mb-0">1TB, Graphite</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: `50px` }}>
                                <h5 class="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: `80px` }}>
                                <h5 class="mb-0">$1799</h5>
                              </div>
                              <a href="#!" style={{ color: `#cecece` }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="card bg-primary text-white rounded-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0" style={{ fontWeight: `bold` }}>
                              Thông tin khách hàng
                            </h5>
                          </div>

                          <form class="mt-4">
                            <label class="form-label" for="typeName">
                              Hình thức thanh toán
                            </label>
                            <select
                              class="form-select form-outline mb-4"
                              placeholder="Hình thức thanh toán"
                              aria-label="Default select example"
                            >
                              <option value="1">
                                Thanh toán khi nhận hàng
                              </option>
                              <option value="2">Thanh toán bằng thẻ</option>
                              <option value="3">
                                Thanh toán bằng ví điện tử
                              </option>
                            </select>

                            <div class="form-outline form-white mb-4">
                              <label class="form-label" for="typeName">
                                Tên người nhận hàng
                              </label>
                              <input
                                type="text"
                                id="typeName"
                                class="form-control form-control-lg"
                                placeholder="Họ và tên"
                              />
                            </div>

                            <div class="form-outline form-white mb-4">
                              <label class="form-label" for="typeText">
                                Số điện thoại người nhận:
                              </label>
                              <input
                                type="text"
                                id="typeText"
                                class="form-control form-control-lg"
                                size="17"
                                placeholder="Nhập số điện thoại"
                                minlength="10"
                                maxlength="10"
                              />
                            </div>

                            <div class="form-outline form-white mb-4">
                              <label class="form-label" for="typeAdress">
                                Địa chỉ người nhận:
                              </label>
                              <input
                                type="text"
                                id="typeAdress"
                                class="form-control form-control-lg"
                                placeholder="Nhập địa chỉ"
                              />
                            </div>
                          </form>

                          <hr class="my-4" />

                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Tiền hàng:</p>
                            <p class="mb-2">$4798.00</p>
                          </div>

                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Phí vận chuyển</p>
                            <p class="mb-2">$20.00</p>
                          </div>

                          <div class="d-flex justify-content-between mb-4">
                            <p class="mb-2">Tổng(Incl. taxes)</p>
                            <p class="mb-2">$4818.00</p>
                          </div>

                          <button
                            type="button"
                            class="btn btn-light btn-block btn-lg"
                          >
                            <div class="d-flex justify-content-between">
                              <span>Thanh toán </span>
                              <span>
                                <FontAwesomeIcon
                                  icon={faRightLong}
                                  className="ms-2"
                                />{" "}
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartAndPayment;
