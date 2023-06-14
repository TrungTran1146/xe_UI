import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { getAllCart } from "../../services/cartApi";
const Cart = () => {
  const [listCart, setListCart] = useState([]);

  useEffect(() => {

    allCart();

  }, [])

  console.log(listCart)

  const allCart = async () => {
    let res = await getAllCart();
    if (res && res.data)
      setListCart(res.data);
  }
  const handleDeleteBrand = () => {
    alert("trung ne")
  }

  return (
    <div className="cart">
      <section className="h-100 h-custom" style={{ backgroundColor: `#eee` }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a
                          href="/shop"
                          className="text-body text-decoration-none"
                          style={{ fontWeight: `bold` }}
                        >
                          <FontAwesomeIcon icon={faLeftLong} className="me-2" />
                          Tiếp tục mua sắm
                        </a>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Giỏ hàng</p>
                          {/* <p className="mb-0">Bạn đang có 4 sản phẩm trong giỏ hàng</p> */}
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sắp xếp theo:</span>{" "}
                            <a href="#!" className="text-body text-decoration-none">
                              Mức giá{" "}
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                className="mt-1"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      {listCart && listCart.length > 0 &&
                        listCart.map((cart) => {
                          return (
                            <div key={cart.id} class="card mb-3">
                              <div class="card-body">
                                <div class="d-flex justify-content-between">
                                  <div class="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={cart.image}
                                        class="img-fluid rounded-3"
                                        alt=''
                                        style={{ width: `65px` }}
                                      />
                                    </div>
                                    <div class="ms-3">
                                      <h5>{cart.name}</h5>

                                    </div>
                                  </div>
                                  <div class="d-flex  align-items-center">
                                    <div style={{ width: `50px` }}>
                                      <h5 class="fw-normal mb-0">Số lượng: {cart.quantity}</h5>
                                    </div>
                                    <div style={{ width: `80px` }}>
                                      <h5 class="mb-0">{cart.price}VNĐ</h5>
                                    </div>

                                  </div>
                                  <button className='btn-delete '
                                    onClick={() => handleDeleteBrand(cart)}
                                  ><i className="bi bi-trash-fill "></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )

                        })}

                      {/*  */}




                      {/* <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src=""
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: `65px` }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>MacBook Pro</h5>
                                <p className="small mb-0"></p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: `50px` }}>
                                <h5 className="fw-normal mb-0">1</h5>
                              </div>
                              <div style={{ width: `80px` }}>
                                <h5 className="mb-0">$1799</h5>
                              </div>
                              <a href="#!" style={{ color: `#cecece` }}>
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0" style={{ fontWeight: `bold` }}>
                              Thông tin khách hàng
                            </h5>
                          </div>

                          <form className="mt-4">
                            <label className="form-label" htmlFor="typeName">
                              Hình thức thanh toán
                            </label>
                            <select
                              className="form-select form-outline mb-4"
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

                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeName">
                                Tên người nhận hàng
                              </label>
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                placeholder="Họ và tên"
                              />
                            </div>

                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeText">
                                Số điện thoại người nhận:
                              </label>
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                size="17"
                                placeholder="Nhập số điện thoại"
                                minlength="10"
                                maxlength="10"
                              />
                            </div>

                            <div className="form-outline form-white mb-4">
                              <label className="form-label" htmlFor="typeAdress">
                                Địa chỉ người nhận:
                              </label>
                              <input
                                type="text"
                                id="typeAdress"
                                className="form-control form-control-lg"
                                placeholder="Nhập địa chỉ"
                              />
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Tiền hàng:</p>
                            <p className="mb-2"></p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Phí vận chuyển:</p>
                            <p className="mb-2"></p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Tổng:</p>
                            <p className="mb-2"></p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-light btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
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

export default Cart;
