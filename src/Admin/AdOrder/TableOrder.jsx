import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllOrder } from '../../services/brandApi';
import { Button } from 'bootstrap';
// import './Order.css';

import OrderDelete from './OrderDelete';
// import OrderEdit from './OrderEdit';
// import OrderAddNew from './OrderAddNew';
import _ from "lodash";
import { apiGetAllOrder } from '../../services/orderApi';


const TableOrder = (props) => {

    const [listOrder, setListOrder] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataOrderEdit, setDataOrderEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataOrderDelete, setDataOrderDelete] = useState({})



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
    useEffect(() => {

        getOrder();
    }, [])

    const getOrder = async () => {
        let res = await apiGetAllOrder();
        if (res && res.data) {
            setListOrder(res.data)
        }
    }

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

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <h1 className='text-center'>Quản lý đơn hàng</h1>

                        </div>
                        < Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    {/* <th>ID Nguoi dung</th> */}
                                    <th>Tên Uer</th>
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
                                                {/* <td>{item.userId}</td> */}
                                                <td>{item.nameUser}</td>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.date}</td>
                                                <td>{item.status}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.totalOrder.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditOrder(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteOrder(item)}
                                                    ><i className="bi bi-trash-fill "></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </ Table >
                    </div >
                </div >
            </div >


            {/* Them */}
            {/* <OrderAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            /> */}

            {/* Sua */}
            {/* <OrderEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataOrderEdit={dataOrderEdit}
                handleEditOrderFromModal={handleEditOrderFromModal}
            /> */}

            {/* Xoa */}
            <OrderDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataOrderDelete={dataOrderDelete}
                handleDeleteOrderFromModal={handleDeleteOrderFromModal}
            />
        </>

    )
}
export default TableOrder;