
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

import './Sidebar.css';



const Sidebar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className='bg-success col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'>
                        {/* <a className='text-decoration-none text-white d-flex align-itemcenter '>
                            <i className='fs-4 bi bi-speedometer'></i>
                            <span className='ms-1 fs-4'>Brand</span>
                        </a> */}
                        <div>
                            <Link className="navbar-brand   " to="/">

                                <img
                                    className="navbar-logo  d-none d-sm-inline text-decoration-none text-white d-flex align-itemcenter"
                                    // src={logo}
                                    src="https://www.webike.vn/frontend/moto-v2/pc/img/logo-moto.png?159169869320200827"
                                    alt="Xe Logo"
                                    loading="lazy"
                                />
                            </Link>
                            <hr className='text-secondary d-none d-sm-inline' />
                            <ul className='nav nav-pills flex-column'>
                                <li className='nav-item text-white fs-4 '>
                                    <a href='#' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-speedometer2'></i>
                                        <span className='ms-3 d-none d-sm-inline' >Thống kê</span>
                                    </a>
                                </li>

                                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/order' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-table'></i>
                                        <span className='ms-3 d-none d-sm-inline' >Đơn Hàng</span>
                                    </a>
                                </li>
                                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/product' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-grid'></i>
                                        <span className='ms-3 d-none d-sm-inline' >Sản phẩm</span>
                                    </a>
                                </li>
                                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/nhapxe' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-cart4'></i>
                                        <span className='ms-3 d-none d-sm-inline' > Nhập xe</span>
                                    </a>
                                </li>
                                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='/admin/brand' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-cart4'></i>
                                        <span className='ms-3 d-none d-sm-inline' >Loại xe</span>
                                    </a>
                                </li>
                                <li className='nav-item text-white fs-4 my-1 py-2 py-sm-0'>
                                    <a href='#' className='nav-link text-white fs-5 ' aria-current='page'>
                                        <i className='bi bi-cart4'></i>
                                        <span className='ms-3 d-none d-sm-inline' ></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;