import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer class="text-center text-lg-start bg-dark text-light">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Biết thêm về chúng tôi thông qua các kênh:</span>
        </div>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100006029388415"
            class="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/vdm2801/"
            class="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} /> &ensp; Đồ Án Web Bán Hàng
              </h6>
              <p>
                Đây không phải là đồ án đầu tiên. Nhưng nó là đồ án tốt nhất tôi
                từng tạo ra
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Công cụ tiêu biểu</h6>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nodejs.org/en"
                  class="text-reset"
                >
                  NodeJS
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vi.reactjs.org/"
                  class="text-reset"
                >
                  ReactJS
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://expressjs.com/"
                  class="text-reset"
                >
                  ExpressJS
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mongodb.com/"
                  class="text-reset"
                >
                  MongoDB
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Các trang tiêu biểu</h6>
              <p>
                <a href="/" class="text-reset">
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="/" class="text-reset">
                  Sản phẩm
                </a>
              </p>
              <p>
                <a href="/" class="text-reset">
                  Chi tiết sản phẩm
                </a>
              </p>
              <p>
                <a href="/" class="text-reset">
                  Giỏ hàng
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Thông tin liên hệ</h6>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> 42 Phạm Ngọc Thạch, Phường 6, Quận 3, Thành phố Hồ Chí Minh
              </p>
              <a
                className="text-decoration-none text-white"
                href="mailto:trungtran1146@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} /> trungtran1146@gmail.com
              </a>
              <br />
              <a
                className="text-decoration-none text-white"
                href="tel:trungtran1146@gmail.com"
              >
                <FontAwesomeIcon icon={faPhone} /> 0385371146
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        class="text-center p-4"
        style={{ backgroundColor: `rgba(0, 0, 0, 0.05);` }}
      >

        <a
          target="_blank"
          rel="noreferrer"
          class="text-reset fw-bold"
          href="https://www.facebook.com/profile.php?id=100006029388415"
        >
          Trần Ngọc Trung
        </a>
      </div>
    </footer>
  );
};

export default Footer;
