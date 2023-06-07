
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { BiHome, BiCar, BiPhone, BiUser, BiCog } from 'react-icons/bi';
import { AiFillDashboard, AiOutlineShoppingCart, AiOutlineAppstoreAdd, AiOutlineArrowRight, AiOutlineStock, AiOutlineTags } from 'react-icons/ai';
import './Sidebar.css';







const Sidebar = () => {
    return (
        <>
            {/* <div classNameName="container">
                <div classNameName="row">
                    <div classNameName='bg-success col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
                        <div>
                            <Link classNameName="navbar-brand" to="/">

                                <img
                                    classNameName="navbar-logo  d-none d-sm-inline text-decoration-none text-white d-flex align-itemcenter"
                                    // src={logo}
                                    src="https://www.webike.vn/frontend/moto-v2/pc/img/logo-moto.png?159169869320200827"
                                    alt="Xe Logo"
                                    loading="lazy"
                                />
                            </Link>
                            <hr classNameName='text-secondary d-none d-sm-inline' />
                            <ul classNameName='nav nav-pills flex-column'>
                                <li classNameName='nav-item text-white fs-4 '>
                                    <a href='#' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-speedometer2'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' >Thống kê</span>
                                    </a>
                                </li>

                                <li classNameName='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/order' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-table'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' >Đơn Hàng</span>
                                    </a>
                                </li>
                                <li classNameName='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/product' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-grid'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' >Sản phẩm</span>
                                    </a>
                                </li>
                                <li classNameName='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/nhapxe' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-cart4'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' > Nhập xe</span>
                                    </a>
                                </li>
                                <li classNameName='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/brand' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-cart4'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' >Loại xe</span>
                                    </a>
                                </li>
                                <li classNameName='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' classNameName='nav-link text-white fs-5 ' aria-current='page'>
                                        <i classNameName='bi bi-cart4'></i>
                                        <span classNameName='ms-3 d-none d-sm-inline' ></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav id="sidebar">
                <div className="sidebar-header">
                    <Link to="/">
                        Admin
                    </Link>

                </div>

                <ul className="list-unstyled components">
                    <li>
                        <Link to="#">
                            <AiFillDashboard />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/product">
                            <AiOutlineAppstoreAdd />
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/order">
                            <AiOutlineShoppingCart />
                            Đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/brand">
                            <AiOutlineTags />
                            Hãng xe
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/typecar">
                            <AiOutlineTags />
                            Loại xe
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/nhapxe">
                            <AiOutlineStock />
                            Nhập hàng
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar;