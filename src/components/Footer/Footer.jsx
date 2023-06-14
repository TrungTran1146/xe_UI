import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="text-center text-lg-start .bg-secondary text-dark">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">


        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/TrungTran1146"
            className="me-4 text-reset"
          >

            <img className="footer-social__image webpexpress-processed" src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/share/ico-fb.png" alt=" facebook" width="50" height="50"></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/TrungTran1146"
            className="me-4 text-reset"
          >
            <img className="footer-social__image webpexpress-processed" src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/share/ico-instagram.png" alt=" instagram" width="50" height="50"></img>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/TrungTran1146"
            className="me-4 text-reset"
          >
            <img src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/share/ico-youtube.png" alt=" youtube" width="62" height="50"></img>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/TrungTran1146"
            className="me-4 text-reset"
          >
            <img src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/share/ico-tiktok.png" alt=" tiktok" width="50" height="50"></img>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} /> &ensp; CỬA HÀNG XE MÁY TRUNG TRẦN
              </h6>
              <p>
                Số GCNĐKDN: 2500150543 <br />
                Đăng ký lần đầu: Ngày 26/6/2008 <br />
                Đăng ký thay đổi lần thứ 14: Ngày 03/4/2023. <br />
                Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở Kế hoạch và Đầu tư Tp_HCM
                Địa chỉ: 42 Phạm Ngọc Thạch, Phường 6, Quận 3, Thành phố Hồ Chí Minh
              </p>
              <img alt="Bộ Công Thương" title="" src="https://yamaha-motor.com.vn/wp/wp-content/themes/yamaha/assets/img/share/logoSaleNoti.png" width="150" height="57" className="notLazy webpexpress-processed"></img>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">XE MÁY</h6>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                  className="text-reset"
                >
                  Hãng xe
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=""
                  className="text-reset"
                >
                  Loại xe
                </a>
              </p>


            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Các trang tiêu biểu</h6>
              <p>
                <a href="/" className="text-reset">
                  Trang chủ
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Sản phẩm
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Chi tiết sản phẩm
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Giỏ hàng
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thông tin liên hệ</h6>
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
        className="footer text-center p-4"

      >

        <p>© 2023 BẢN QUYỀN THUỘC VỀ TRẦN NGỌC TRUNG</p>


      </div>
    </footer>
  );
};

export default Footer;
