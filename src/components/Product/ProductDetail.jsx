import React, { useEffect, useState } from "react";

import { getProductID } from "../../services/productApi";
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { getAllCart, postCreateCart, deteteCart } from "../../services/cartApi";
import { ToastContainer, toast } from 'react-toastify';


const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isAdded, setAdded] = useState(false);
  const [quantity, setQuantityCart] = useState(1);
  const [productId, setProductId] = useState(0);
  const [name, setNameCart] = useState("");
  const [image, setImageCart] = useState();
  const [price, setPriceCart] = useState();
  const [totalCart, setTotalCart] = useState(0);
  const [total, setTotal] = useState();
  const [checkID, setCheckIdUser] = useState();
  const [checkName, setCheckNameUser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
    checkIdNameUsers();
    // createCart();
  }, []);

  const loadProduct = async () => {
    const response = await getProductID(id);
    setProduct(response.data);
    setProductId(response.data.id);
    setNameCart(response.data.name);
    setImageCart(response.data.image);
    setPriceCart(response.data.price);

  }

  const checkIdNameUsers = () => {
    var idUser = localStorage.getItem('id');
    var nameUser = localStorage.getItem('name');
    setCheckIdUser(idUser);
    setCheckNameUser(nameUser);
  }


  if (!product) {
    return null;
  }


  const handleAddCart = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      toast.warning("Bạn chưa đăng nhập vào trang web!")
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      setAdded(true);

      // setQuantityCart(quantity + 1);
      let res = await postCreateCart(checkID, quantity, productId, name, image, price);
      if (res && res.data) {
        toast.success("Thêm xe vào giỏ hàng thành công!");
        setTotal((total) => (total += Number(price)))

      } else {
        toast.error("Thêm xe vào giỏ hàng thất bại!");
      }
    }
  }

  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx -lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.image}
                alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="h1 display-5 font-weight-bold">{product.name}</h1>
              <div className="fs-5 mb-2">
                <span>Giá tiền: {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              </div>
              <div className="fs-5 mb-2">
                <span>Trạng thái: {product.status}</span>
              </div>
              <div className="fs-5 mb-2">

                <span>Số lượng còn lại: {product.quantity - 1} xe</span>
              </div>
              <p className="lead">
                Mô tả: {product.description}
              </p>
              <div className="d-flex">
                {/* // */}
                {isAdded ?
                  (<button
                    className="btn btn-outline-primary flex-shrink-0 ms-3"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2"
                    />
                    Đã vào giỏ hàng
                  </button>)
                  :
                  (<button
                    className="btn btn-outline-primary flex-shrink-0 ms-3"
                    type="button"

                    onClick={handleAddCart}>
                    <FontAwesomeIcon icon={faCartShopping} className="me-2"
                    />
                    Thêm vào giỏ hàng
                  </button>)
                }
                {/* // */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5">
        <div className="container px-4 px-lg-5 my-5"><h1><b>Thông số kĩ thuật</b></h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    </>
  );
};

export default ProductDetail;
