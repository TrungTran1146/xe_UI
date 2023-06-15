
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

            <nav id="sidebar">
                <div className="rounded-3 sidebar-header">
                    <Link to="/">
                        Admin
                    </Link>

                </div>

                <ul className="list-unstyled components">
                    <li >
                        <Link className="rounded-3" to="#">
                            <AiFillDashboard />
                            Dashboard
                        </Link>
                    </li>
                    <li >
                        <Link className="rounded-3" to="/admin/product">
                            <AiOutlineAppstoreAdd />
                            Sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-3" to="/admin/order">
                            <AiOutlineShoppingCart />
                            Đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-3" to="/admin/brand">
                            <AiOutlineTags />
                            Hãng xe
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-3" to="/admin/typecar">
                            <AiOutlineTags />
                            Loại xe
                        </Link>
                    </li>
                    <li>
                        <Link className="rounded-3" to="/admin/nhapxe">
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