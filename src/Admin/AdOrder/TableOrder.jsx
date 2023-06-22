import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllOrder } from '../../services/brandApi';
import { Button } from 'bootstrap';
// import './Order.css';

import OrderDelete from './OrderDelete';
// import OrderEdit from './OrderEdit';
// import OrderAddNew from './OrderAddNew';
import _ from "lodash";
import { apiGetAllOrder, apiPutOrder, getOrderPage } from '../../services/orderApi';
import { event } from 'jquery';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const TableOrder = (props) => {

    const [listOrder, setListOrder] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataOrderEdit, setDataOrderEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataOrderDelete, setDataOrderDelete] = useState({})


    const [changeStatus, setChangeStatus] = useState('')

    const [totalOrder, setTotalOrder] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

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
        getOrderPages(1);
        // getOrder();
    }, []);

    // const getOrder = async () => {
    //     let res = await apiGetAllOrder();
    //     if (res && res.data) {
    //         setListOrder(res.data)
    //     }
    // };

    const handleOnClickStatus = (event, index) => {
        const value = event.target.value;
        console.log(value);
        const newOptions = [...listOrder];
        newOptions[index].status = value;
        setListOrder(newOptions);
    }



    //Sửa đơn hàng
    const handleSaveOrder = async (brand) => {
        console.log('check', brand)
        let res = await apiPutOrder(brand.id, brand.userId, brand.nameUser, brand.name, brand.phone, brand.address,
            brand.date, brand.status, brand.quantity, brand.totalOrder);
        if (res && res.data) {
            toast.success("Update trạng thái thành công!")
        } else {
            toast.error("Update trạng thái thất bại!")
        }
        // console.log('check', res.data)
        // setDataOrderEdit(brand);
        // setIsShowModalEdit(true);
    }

    const handleDetailOrder = () => {

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

    //phan trang
    const getOrderPages = async (page) => {
        let res = await getOrderPage(page);
        console.log(res.data.items);
        if (res && res.data) {
            // console.log(res);
            setTotalOrder(res.data.totalItems);
            setTotalPages(res.data.totalPages)
            setListOrder(res.data.items);
        }
    }

    const handlePageClick = (event) => {
        console.log(event);
        getOrderPages(+event.selected + 1);
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
                                    <th>Mã đơn hàng</th>
                                    {/* <th>ID Nguoi dung</th> */}
                                    <th>Tên Uer</th>
                                    <th>Tên người đặt</th>
                                    <th>SĐT</th>
                                    <th>Địa chỉ cửa hàng</th>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                    <th>Số lượng xe</th>
                                    <th>Tổng tiền</th>
                                    <th>Hành động</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listOrder && listOrder.length > 0 &&
                                    listOrder.map((item, index) => {
                                        return (
                                            <tr key={item.id}>

                                                <td>{item.id}</td>
                                                {/* <td>{item.userId}</td> */}
                                                <td>{item.nameUser}</td>
                                                <td>{item.name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.address}</td>
                                                <td>{item.date}</td>
                                                <td className=''>
                                                    {/* <button
                                                        className='btn btn-danger'
                                                        onClick={(event) => handleOnClickStatus(event, index)}>
                                                       
                                                    </button> */}
                                                    <select name="" id=""
                                                        value={item.status}
                                                        onChange={(event) => handleOnClickStatus(event, index)}

                                                    >
                                                        <option value=""> {item.status}</option>
                                                        <option value="Đang chờ xác nhận"> Đang chờ xác nhận</option>
                                                        <option value="Đang chờ khách hàng đến cửa hàng nhận hàng"> Đang chờ khách hàng đến cửa hàng nhận hàng</option>
                                                        <option value="Đã nhận hàng và thanh toán">Đã nhận hàng và thanh toán</option>
                                                    </select>


                                                </td>

                                                <td>{item.quantity}</td>
                                                <td>{item.totalOrder.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>
                                                    <button className='btn btn-danger'
                                                        onClick={() => handleDetailOrder(item)}>
                                                        {/* <i className="bi bi-pencil "></i> */}
                                                        Chi tiết ĐH
                                                    </button>
                                                    <button className='btn-edit'
                                                        onClick={() => handleSaveOrder(item)}>
                                                        <i className="bi bi-save "></i>

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
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalPages}
                            previousLabel="< previous"

                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                        />
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