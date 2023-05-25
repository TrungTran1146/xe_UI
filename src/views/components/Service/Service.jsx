import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Dịch Vụ Nổi Bật</h1>
            <p>Ưu đãi - Tận tâm - Nhanh chóng</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faTruck} />
              </div>
              <h2 className="h5 mt-4 text-center">Chính Sách Vận Chuyển</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faArrowRightArrowLeft} />
              </div>
              <h2 className="h5 mt-4 text-center">Chính Sách Đổi Trả</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faPercent} />
              </div>
              <h2 className="h5 mt-4 text-center">Khuyến Mãi</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faUser} />
              </div>
              <h2 className="h5 mt-4 text-center">Tư vấn khách hàng</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
