import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
  return (
    <div>
      <div class="row text-center pt-5 pb-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">Sản Phẩm</h1>
          <p>Chất lượng - Giá tốt - Bền bỉ</p>
        </div>
      </div>
      <div class="container">
        <div class="row px-xl-5">
          <div class="col-lg-3 d-none d-lg-block">
            <div
              class="shadow-none d-flex align-items-center justify-content-between bg-primary text-white mb-4 w-100"
              style={{ height: `65px`, marginTop: `-1px`, padding: `0px 30px` }}
            >
              <h6 class="m-0">Phân Loại Sản Phẩm</h6>
            </div>
            <ul class="list-unstyled e_commerce-accordion">
              <li class="pb-3">
                <a
                  class="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="..."
                >
                  Linh kiện máy tính
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    className="text-primary"
                  />
                </a>
                <ul class="collapse show list-unstyled pl-3">
                  <li>
                    <a class="text-decoration-none" href="...">
                      Hàng mới chính hãng
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="...">
                      Hàng đã qua sử dụng
                    </a>
                  </li>
                </ul>
              </li>
              <li class="pb-3">
                <a
                  class="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="..."
                >
                  Laptop
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    className="text-primary"
                  />
                </a>
                <ul id="collapseTwo" class="collapse list-unstyled pl-3">
                  <li>
                    <a class="text-decoration-none" href="...">
                      Laptop chính hãng
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="...">
                      Laptop đã qua sử dụng
                    </a>
                  </li>
                </ul>
              </li>
              <li class="pb-3">
                <a
                  class="collapsed d-flex justify-content-between h3 text-decoration-none"
                  href="..."
                >
                  Các phụ kiện khác
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    className="text-primary"
                  />
                </a>
                <ul id="collapseThree" class="collapse list-unstyled pl-3">
                  <li>
                    <a class="text-decoration-none" href="...">
                      Chuột
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="...">
                      Bàn phím
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="...">
                      Tai nghe
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 ">
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
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
                        Thêm vào
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
