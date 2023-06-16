import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import logo from '../../../assets/image/logo1.svg';
import './Navbar.css';
import { CartContext } from "../../Contexts/CartContext";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [namUser, setNameUser] = useState('');
  const { checkID, checkName } = useContext(CartContext);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
    checkNameUsers();
  }, []);


  const checkNameUsers = () => {
    var nameUser = localStorage.getItem('name');
    setNameUser(nameUser);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    setNameUser('');
    setIsLoggedIn(false);
  };

  const handleClickAdmin = () => {
    if (checkName === 'admin') {
      navigate('/admin');
    }

  }
  return (
    <div>
      {/* Navbar */}
      <nav className="header navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">

          <Link className="navbar-brand" to="/">
            <img
              className="navbar-logo"
              // src={logo}
              src="https://www.webike.vn/frontend/moto-v2/pc/img/logo-moto.png?159169869320200827"
              alt="Xe Logo"
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav1 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="fs-4 nav-link active " aria-current="page" to="/">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="fs-4 nav-link active "
                  // dropdown-toggle
                  to="/shop"
                  id="navbarDropdown">
                  Xe máy
                </Link>

              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
              />
              <button className="btn btn btn-danger" href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>


              {isLoggedIn ?
                isLoggedIn && <button
                  className="btn btn btn-danger mx-2"
                  onClick={handleLogout}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                </button>
                :
                <Link
                  to="/login"
                  className="btn btn btn-danger mx-2"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faUser} />

                </Link>
              }
              <Link
                className="btn btn btn-danger position-relative mr-2"
                to="/cart"
                type="submit"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                {/* <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  0
                </span> */}
              </Link>
              <span
                onClick={handleClickAdmin}
                className="btn btn btn-danger mx-2"
              >{namUser}</span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
