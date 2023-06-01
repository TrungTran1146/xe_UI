import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";


const Slider = () => {
  return (
    <>
      <div id="hero-carousel" className="slide1 carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#hero-carousel" data-bs-slide-to="0" className=" active"></li>
          <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
          <li data-bs-target="#hero-carousel" data-bs-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <a
                    rel="noreferrer"
                    className="text-primary"
                    href="https://media.vov.vn/sites/default/files/styles/large/public/2021-09/color_chart_1920x1080-02.png.jpg"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src="https://media.vov.vn/sites/default/files/styles/large/public/2021-09/color_chart_1920x1080-02.png.jpg"
                      alt="slide1"
                    />
                  </a>

                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-primary">Honda Sh150i</h1>
                    <h3 className="h2">Thông số thiết kế

                    </h3>
                    <p>
                      Kích thước Dài x Rộng x Cao trên mẫu SH 2022 đời mới lần lượt là 2.090 x 739 x 1.129,
                      khoảng cách trục bánh xe 1.353mm, độ cao yên ở mức 799mm, khoảng sáng gầm xe 146mm, trọng lượng ở mức 133 kg cho SH 2022
                      phiên bản ABS và 134 kg cho phiên bản CBS..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <a
                    rel="noreferrer"
                    className="text-primary"
                    href="https://content2.kawasaki.com/ContentStorage/KMV/Products/4915/e1b15e8c-243d-4155-9ea5-80fe341e6038.jpeg"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src="https://content2.kawasaki.com/ContentStorage/KMV/Products/4915/e1b15e8c-243d-4155-9ea5-80fe341e6038.jpeg"
                      alt="slide2"
                    />
                  </a>

                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1 text-primary">NINJA H2R</h1>
                    <h3 className="h2">Thông số thiết kế </h3>
                    <p>
                      Trái tim của Kawasaki H2R chính hãng 2021 là khối động cơ siêu nạp, 4 xylanh, dung tích 998cc, kết hợp hệ thống siêu nạp Supercharged
                      giúp xe sản sinh công suất tối đa lên tới 310 mã lực (tăng lên 326 mã lực khi kích hoạt Ram-air) tại 14.000 vòng/phút. Sức kéo cực
                      khủng với mô men xoắn cực đại đạt 155 Nm tại 12.500 vòng/phút.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <a
                    rel="noreferrer"
                    className="text-primary"
                    href="https://thuongmotor.com/wp-content/uploads/2021/04/z2421637089850_022cf523b9b16d053ca4e4ba7f0fe7a7.jpg"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src="https://thuongmotor.com/wp-content/uploads/2021/04/z2421637089850_022cf523b9b16d053ca4e4ba7f0fe7a7.jpg"
                      alt="slide2"
                    />
                  </a>

                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1 text-primary">NINJA ZX-10R</h1>
                    <h3 className="h2">Thông số thiết kế </h3>
                    <p>
                      Dài x Rộng x Cao: 2090mm x 745mm x 1145mm. <br />
                      Dung tích xy-lanh : 998cc<br />
                      Hộp số : 6 cấp<br />
                      Phanh trước/sau: Kawasaki Intelligent anti-lock Braking (KIBS), 310mm đĩa cánh hoa, bốn piston kép;<br />
                      Độ cao yên : 835mm<br />
                      Loại động cơ : Bốn thì, làm mát bằng nước, DOHC, bốn van mỗi xi-lanh, inline<br />
                      Công suất tối đa : 200 mã lực tại 13.200 vòng/phút<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <a
                    rel="noreferrer"
                    className="text-primary"
                    href="https://cdn.honda.com.vn/motorbikes/August2022/8bFDdMn2d3W0dHQPzeBw.png"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src="https://cdn.honda.com.vn/motorbikes/August2022/8bFDdMn2d3W0dHQPzeBw.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1 text-primary">Wave Alpha</h1>
                    <h3 className="h2">Thông số thiết kế  </h3>
                    <p>
                      Wave Alpha phiên bản 2023 trẻ trung và năng động với màu đen mờ hoàn toàn mới cùng thiết kế bộ tem mới ấn tượng,
                      thu hút ánh nhìn, cho bạn tự tin thể hiện cá tính của mình trên mọi hành trình.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-primary text-decoration-none w-auto ps-3"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </a>
        <a
          className="carousel-control-next text-primary text-decoration-none w-auto pe-3"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>

    </>

  );
};

export default Slider;
