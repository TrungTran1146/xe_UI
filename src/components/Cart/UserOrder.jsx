import Table from 'react-bootstrap/Table';
import { useContext, useEffect, useState } from 'react';

import { getAllOrder } from '../../services/brandApi';
import { Button } from 'bootstrap';
// import './Order.css';


import _ from "lodash";
import { apiGetAllOrder, apiGetOrderID, getOrderID } from '../../services/orderApi';
import { CartContext } from '../../Contexts/CartContext';


const UserOrder = (props) => {

    const [listOrder, setListOrder] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataOrderEdit, setDataOrderEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataOrderDelete, setDataOrderDelete] = useState({})

    const { checkID } = useContext(CartContext);
    useEffect(() => {
        if (checkID) {
            getOrderIDs();
        }

    }, [checkID]);

    const getOrderIDs = async () => {
        let res = await apiGetOrderID(checkID);
        console.log(res)
        if (res && res.data) {
            setListOrder(res.data)
        }
    }

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (brand) => {
        setListOrder([brand, ...listOrder])
    }


    const handleEditOrderFromModal = (brand) => {
        let cloneListOrder = _.cloneDeep(listOrder);

        let index = listOrder.findIndex(item => item.id === brand.id);
        cloneListOrder[index].brandName = brand.brandName;
        cloneListOrder[index].description = brand.description;
        setListOrder(cloneListOrder);
    }

    //call api getallOrder



    //Sửa sản phẩm
    const handleEditOrder = (brand) => {
        setDataOrderEdit(brand);
        setIsShowModalEdit(true);
    }

    //Xóa Sản phẩm
    const handleDeleteOrder = (brand) => {
        setIsShowDelete(true);
        setDataOrderDelete(brand);

    }
    const handleDeleteOrderFromModal = (brand) => {
        let cloneListOrder = _.cloneDeep(listOrder);
        cloneListOrder = cloneListOrder.filter(item => item.id !== brand.id);
        setListOrder(cloneListOrder);
    }
    return (
        <>

            <div className="container row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <h1 className='text-center'>Đơn hàng của bạn</h1>

                        </div>
                        < Table striped bordered hover >
                            <thead>
                                <tr>

                                    {/* <th>ID Nguoi dung</th> */}

                                    <th>Mã đơn hàng</th>
                                    <th>Tên người đặt</th>
                                    <th>SĐT</th>
                                    <th>Địa chỉ</th>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                    <th>Số lượng xe</th>
                                    <th>Tổng tiền</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listOrder && listOrder.length > 0 &&
                                    listOrder.map((item, index) => {
                                        return (
                                            <tr key={`brand-${index}`}>



                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.date}</td>
                                                <td>{item.status}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.totalOrder.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                {/* <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditOrder(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteOrder(item)}
                                                    ><i className="bi bi-trash-fill "></i>
                                                    </button>
                                                </td> */}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </ Table >
                    </div >
                </div >
            </div >



        </>

    )
}
export default UserOrder;