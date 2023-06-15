import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { deleteCart, getAllCart } from "../../services/cartApi";
import { toast } from "react-toastify";
import _ from "lodash";
import CartDelete from "./CartDelete";
import { apiPostOrder } from "../../services/orderApi";
import { useNavigate } from "react-router-dom";
// const history = useHistory();


const Cart = () => {
  const [listCart, setListCart] = useState([]);

  const [isShowDelete, setIsShowDelete] = useState(false);
  const [dataCartDelete, setDataCartDelete] = useState({})

  const [total, setTotal] = useState(0);
  const [quantityOrder, setQuantityOrder] = useState(0);

  const [status, setStatus] = useState('Chưa thanh toán')
  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [checkID, setCheckIdUser] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    allCart();

    checkIdUsers();
  }, [])


  const checkIdUsers = () => {
    var idUser = localStorage.getItem('id');
    setCheckIdUser(idUser);
  }


  const getTotal = async (data) => {
    let tol = 0;
    let quan = 0;
    data.forEach(p => {
      tol += p.price;
      quan += p.quantity;
    })
    setQuantityOrder(quan);
    setTotal(tol);
  }
  //GỌi API
  const allCart = async () => {
    let res = await getAllCart();
    if (res && res.data) {
      setListCart(res.data);
      getTotal(res.data)
    }
  }

  // console.log('thoi gian', date.toLocaleString());


  console.log('dsd', checkID, name, phone, address, date.toLocaleString(), status, quantityOrder, total)
  const postOrder = async () => {
    let res = await apiPostOrder(checkID, name, phone, address, date.toLocaleString(), status, quantityOrder, total);
    console.log(res.data);

    if (res && res.data) {
      toast.success("Đặt hàng thành công!");
    }
    else {
      toast.error("Đặt hàng thất bại!");
    }
  }

  const handleClose = () => {
    setIsShowDelete(false);
  }

  //Xóa
  const handleDeleteCart = async (cart) => {
    setIsShowDelete(true);
    setDataCartDelete(cart);

  }
  const handleDeleteCartFromModal = (cart) => {
    allCart();
  }


  const handleBuyCart = () => {

    const token = localStorage.getItem('access_token');

    if (!token) {
      toast.warning("Bạn chưa đăng nhập vào trang web!")
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }

    console.log('dsd', checkID, name, phone, address, date.toLocaleString(), status, quantityOrder, total)

    // setTimeout(() => {
    postOrder();

    // }, 1000);

  }
  return (
    <>
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
                            <p className="mb-1">Thông tin giỏ hàng của bạn</p>
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
                              <div key={cart.id} className="card mb-3">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                      {/* <div > */}
                                      <img
                                        src={cart.image}
                                        className="image img-fluid rounded-3"
                                        alt=''
                                        style={{ width: `100px` }}
                                      />
                                      {/* </div> */}
                                      <div className="ms-3">
                                        <h5>{cart.name}</h5>

                                      </div>
                                    </div>
                                    <div className="d-flex  align-items-center">
                                      <div style={{ width: `150px` }}>
                                        <h6 className="">Số lượng: {cart.quantity}</h6>
                                      </div>
                                      <div style={{ width: `100px` }}>

                                        <h6 >{cart.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h6>
                                      </div>

                                    </div>
                                    <button className='btn-delete '
                                      onClick={() => handleDeleteCart(cart)}
                                    ><i className="bi bi-trash-fill "></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )

                          })}
                        <hr />
                        <div className="font-weight-bold fs-4">Số lượng: {quantityOrder} xe</div>
                        <div className="font-weight-bold fs-4">Tổng tiền: {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</div>
                        {/*  */}
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
                                <option >
                                  Thanh toán khi nhận hàng
                                </option>

                              </select>

                              <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeName">
                                  Tên người nhận hàng
                                </label>
                                <input
                                  type="text"
                                  onChange={(event) => setName(event.target.value)}
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
                                  onChange={(event) => setPhone(event.target.value)}
                                  className="form-control form-control-lg"
                                  size="17"
                                  placeholder="Nhập số điện thoại"
                                  minLength="10"
                                  maxLength="10"
                                />
                              </div>

                              <div className="form-outline form-white mb-4">
                                <label className="form-label" htmlFor="typeAdress">
                                  Địa chỉ người nhận:
                                </label>
                                <input
                                  type="text"
                                  onChange={(event) => setAddress(event.target.value)}
                                  className="form-control form-control-lg"
                                  placeholder="Nhập địa chỉ"
                                />
                              </div>
                            </form>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Số lượng:{quantityOrder}</p>
                              <p className="mb-2"></p>
                            </div>



                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Tổng tiền:{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </p>
                              <p className="mb-2"></p>
                            </div>

                            <button
                              type="button"
                              className="btn btn-light btn-block btn-lg"
                              onClick={handleBuyCart}
                            >
                              <div className="d-flex justify-content-between">
                                <span>Đặt hàng </span>
                                <span>
                                  <FontAwesomeIcon
                                    icon={faRightLong}
                                    className="ms-2"
                                  />
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
      <CartDelete
        show={isShowDelete}
        handleClose={handleClose}
        dataCartDelete={dataCartDelete}
        handleDeleteCartFromModal={handleDeleteCartFromModal}
      />
    </>

  );
};

export default Cart;
