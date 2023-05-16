import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  return (
    <div>
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx -lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="small mb-1">PRODUCT-ID:...</div>
              <h1 class="h1 display-5 font-weight-bold">Shop item template</h1>
              <div class="fs-5 mb-5">
                <span class="text-decoration-line-through">$45.00</span>
                <span>$40.00</span>
              </div>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div class="d-flex">
                <button className="btn btn-primary btn-minus">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  class="form-control text-center"
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
                  class="btn btn-outline-primary flex-shrink-0 ms-3"
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
      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 className="h2 font-weight-bolder mb-4">Sản phẩm tương tự</h2>
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    <span class="text-muted text-decoration-line-through mx-2">
                      $80.00
                    </span>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Special Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span class="text-muted text-decoration-line-through mx-2">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>

                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Sale Item</h5>
                    <span class="text-muted text-decoration-line-through mx-2">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-primary mt-auto" href="...">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="card h-100">
                <div
                  class="badge bg-danger text-white position-absolute"
                  style={{ top: `0.5rem`, right: `0.5rem` }}
                >
                  Sale
                </div>
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">Popular Item</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    $40.00
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-primary mt-auto" href="...">
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

export default Product;
