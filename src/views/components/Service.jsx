import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Dịch Vụ Nổi Bật</h1>
            <p>Ưu đãi - Tận tâm - Nhanh chóng</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faTruck} />
              </div>
              <h2 class="h5 mt-4 text-center">Chính Sách Vận Chuyển</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faArrowRightArrowLeft} />
              </div>
              <h2 class="h5 mt-4 text-center">Chính Sách Đổi Trả</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faPercent} />
              </div>
              <h2 class="h5 mt-4 text-center">Khuyến Mãi</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-primary text-center">
                <FontAwesomeIcon className="i" icon={faUser} />
              </div>
              <h2 class="h5 mt-4 text-center">Chính Sách Lắp Đặt</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
