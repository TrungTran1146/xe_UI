import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllProduct, getProductPage } from '../../services/productApi';
import { Button } from 'bootstrap';
import './Product.css';

import ProductDelete from './ProductDelete';
import ProductEdit from './ProductEdit';
import ProductAddNew from './ProductAddNew';
import _ from "lodash";
import { getAllBrand } from '../../services/brandApi';
import { getAllTypeCar } from '../../services/typeCarApi';
import ReactPaginate from 'react-paginate';

const TableProduct = (props) => {

    const [listProduct, setListProduct] = useState([]);
    const [listBrand, setListBrand] = useState([]);
    const [listTypeCar, setListTypeCar] = useState([]);

    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataProductDelete, setDataProductDelete] = useState({})

    //phan trang
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (product) => {
        setListProduct([product, ...listProduct])
    }

    const handleEditProductFromModal = (product) => {
        let cloneListProduct = _.cloneDeep(listProduct);

        let index = listProduct.findIndex(item => item.id === product.id);
        cloneListProduct[index].name = product.name;
        cloneListProduct[index].price = product.price;
        cloneListProduct[index].status = product.status;
        cloneListProduct[index].quantity = product.quantity;
        cloneListProduct[index].description = product.description;
        cloneListProduct[index].image = product.image;
        setListProduct(cloneListProduct);
    }

    //call api getallProduct
    useEffect(() => {

        // getProduct();
        getProductPages(1);
        getBrand();
        getTypeCar();
    }, [])

    // const getProduct = async () => {
    //     let res = await getAllProduct();
    //     if (res && res.data) {
    //         setListProduct(res.data);
    //     }
    // }


    const getBrand = async () => {
        let res = await getAllBrand();
        if (res && res.data) {
            setListBrand(res.data)
        }
    }

    const getTypeCar = async () => {
        let res = await getAllTypeCar();
        if (res && res.data) {
            setListTypeCar(res.data);
        }
    }
    //Sửa sản phẩm
    const handleEditProduct = (product) => {
        setDataProductEdit(product);
        setIsShowModalEdit(true);
    }

    //Xóa Sản phẩm
    const handleDeleteProduct = (product) => {
        setIsShowDelete(true);
        setDataProductDelete(product);

    }
    const handleDeleteProductFromModal = (product) => {
        let cloneListProduct = _.cloneDeep(listProduct);
        cloneListProduct = cloneListProduct.filter(item => item.id !== product.id);
        setListProduct(cloneListProduct);
    }
    //phan trang
    const getProductPages = async (page) => {
        let res = await getProductPage(page);

        if (res && res.data) {

            setTotalProduct(res.data.totalItems);
            setTotalPages(res.data.totalPages)
            setListProduct(res.data.items);
        }
    }

    const handlePageClick = (event) => {

        getProductPages(+event.selected + 1);
    }
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <h1 className='text-center'>Quản lý sản phẩm</h1>
                            <button className='btn btn-danger d-flex justify-content-end'
                                onClick={() => setIsShowModalAddNew(true)}
                            >Thêm sản phẩm</button>
                        </div>
                        < Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên Xe</th>
                                    <th>Giá Xe</th>
                                    <th>Ảnh</th>
                                    <th>Trạng Thái</th>
                                    {/* <th>Hãng xe</th> */}
                                    <th>Số lượng</th>
                                    <th>Mô tả</th>
                                    <th>Hành Động</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listProduct && listProduct.length > 0 &&
                                    listProduct.map((item, index) => {
                                        return (
                                            <tr key={`product-${index}`}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>
                                                    <img
                                                        className="image"
                                                        src={item.image}
                                                        // "https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"

                                                        alt="..." />
                                                </td>
                                                <td>{item.status}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditProduct(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteProduct(item)}
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
            <ProductAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
                listBrand={listBrand}
                listTypeCar={listTypeCar}

            />

            {/* Sua */}
            <ProductEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                handleEditProductFromModal={handleEditProductFromModal}
                dataProductEdit={dataProductEdit}
            />

            {/* Xoa */}
            <ProductDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataProductDelete={dataProductDelete}
                handleDeleteProductFromModal={handleDeleteProductFromModal}
            />
        </>

    )
}
export default TableProduct;