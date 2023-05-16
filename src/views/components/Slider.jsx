import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  return (
    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-bs-target="#hero-carousel"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://wallpaperaccess.com/full/850828.png"
                  alt="slide1"
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-primary">
                    <b>Đức Mạnh</b> eCommerce
                  </h1>
                  <h3 class="h2">Tiny and Perfect eCommerce Template</h3>
                  <p>
                    Zay Shop is an eCommerce HTML5 CSS template with latest
                    version of Bootstrap 5 (beta 1). This template is 100% free
                    provided by.
                    <a
                      rel="noreferrer"
                      class="text-primary"
                      href="https://templatemo.com"
                      target="_blank"
                    >
                      TemplateMo
                    </a>
                    website. Image credits go to{" "}
                    <a
                      rel="noreferrer"
                      class="text-primary"
                      href="https://stories.freepik.com/"
                      target="_blank"
                    >
                      Freepik Stories
                    </a>
                    <a
                      rel="noreferrer"
                      class="text-primary"
                      href="https://unsplash.com/"
                      target="_blank"
                    >
                      Unsplash
                    </a>
                    and
                    <a
                      rel="noreferrer"
                      class="text-primary"
                      href="https://icons8.com/"
                      target="_blank"
                    >
                      Icons 8
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://wallpaperaccess.com/full/409399.jpg"
                  alt="slide2"
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Proident occaecat</h1>
                  <h3 class="h2">Aliquip ex ea commodo consequat</h3>
                  <p>
                    You are permitted to use this Zay CSS template for your
                    commercial websites. You are <strong>not permitted</strong>{" "}
                    to re-distribute the template ZIP file in any kind of
                    template collection websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  class="img-fluid"
                  src="https://wallpaperaccess.com/full/737727.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">Repr in voluptate</h1>
                  <h3 class="h2">Ullamco laboris nisi ut </h3>
                  <p>
                    We bring you 100% free CSS templates for your websites. If
                    you wish to support TemplateMo, please make a small
                    contribution via PayPal or tell your friends about our
                    website. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-primary text-decoration-none w-auto ps-3"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </a>
      <a
        class="carousel-control-next text-primary text-decoration-none w-auto pe-3"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
};

export default Slider;
