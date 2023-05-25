import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import productApi from "../../services/productApi";

const ProductDetail = (props) => {

  const { Id, Name, Price, Status, Image, Description, Quantity } = props







  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx -lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpghttps://cdn.honda.com.vn/motorbike-versions/March2023/j37sLOXkDQsdX7nnBTOj.png"
                alt="..."
              />
            </div>
            <div className="col-md-6">

              <h1 className="h1 display-5 font-weight-bold">{Name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>
                <span>$40.00</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
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
                  style={{ maxWidth: `3rem` }}
                />
                <button className="btn btn-primary btn-plus">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  className="btn btn-outline-primary flex-shrink-0 ms-3"
                  type="button"
                >
                  <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <h2 className="h2 font-weight-bolder mb-4">Sản phẩm tương tự</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    <span className="text-muted text-decoration-line-through mx-2">
                      $80.00
                    </span>
                    $40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span className="text-muted text-decoration-line-through mx-2">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>

                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through mx-2">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <div
                  className="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    $40.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
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

export default ProductDetail;
