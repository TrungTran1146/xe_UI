import React, { useEffect, useState } from "react";

import { getProductID } from "../../services/productApi";
import './Product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { faCreativeCommonsSamplingPlus } from "@fortawesome/free-brands-svg-icons";
import Table from 'react-bootstrap/Table';



const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await getProductID(id);
    setProduct(response.data);
  }
  console.log(product)
  if (!product) {
    return null;
  }

  const handleCart = () => {

  }
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx -lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
                alt="..." />
            </div>
            <div className="col-md-6">
              <h1 className="h1 display-5 font-weight-bold">{product.name}</h1>
              <div className="fs-5 mb-2">
                <span>Giá tiền: {product.price} VNĐ</span>
              </div>
              <div className="fs-5 mb-2">
                <span>Trạng thái: {product.status}</span>
              </div>
              <p className="lead">
                Mô tả: {product.description}
              </p>
              <div className="d-flex">
                <button className="btn btn-primary btn-minus">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  className="form-control text-center"
                  name="product-quanity"
                  id="product-quanity"
                  type="num"
                  value="1"
                  style={{ maxWidth: `3rem` }} />
                <button className="btn btn-primary btn-plus">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  className="btn btn-outline-primary flex-shrink-0 ms-3"
                  type="button"
                  onClick={handleCart()}>
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                  Thêm vào giỏ hàng
                </button>
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
