import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllProduct } from '../../services/productApi';
import { Button } from 'bootstrap';
import './Product.css';

import ProductDelete from './ProductDelete';
import ProductEdit from './ProductEdit';
import ProductAddNew from './ProductAddNew';
import _ from "lodash";


const TableProduct = (props) => {

    const [listProduct, setListProduct] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataProductEdit, setDatProductEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataProductDelete, setDataProductDelete] = useState({})



    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (product) => {
        setListProduct([product, ...listProduct])
    }

    //call api getallProduct
    useEffect(() => {

        getProduct();
    }, [])

    const getProduct = async () => {
        let res = await getAllProduct();
        if (res && res.data) {
            setListProduct(res.data);
        }
    }

    //Sửa sản phẩm
    const handleEditProduct = (product) => {
        setDatProductEdit(product);
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
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
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
                                                <td>{item.price}</td>
                                                <td>{item.image}</td>
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
                    </div >
                </div >
            </div >


            {/* Them */}
            <ProductAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />

            {/* Sua */}
            <ProductEdit
                show={isShowModalEdit}
                handleClose={handleClose}
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