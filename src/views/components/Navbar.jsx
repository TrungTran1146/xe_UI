import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.svg';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img className="navbar-logo"
              src={logo}
              alt="Intel Logo"
              loading="lazy"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Trang chủ
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/shop"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sản Phẩm
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/shop">
                      Link Kiện Máy Tính
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/shop">
                      Laptop
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/shop">
                      Các Phụ Kiện Khác
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary" href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <Link
                to="/login"
                class="btn btn-outline-primary mx-2"
                type="submit"
              >
                <FontAwesomeIcon icon={faRightToBracket} />
              </Link>
              <Link
                class="btn btn-outline-primary position-relative mr-2"
                to="/payment"
                type="submit"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
