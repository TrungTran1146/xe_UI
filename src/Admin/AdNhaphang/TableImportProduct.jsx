import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllImportProduct } from '../../services/importProductApi';
import { Button } from 'bootstrap';
import './importProduct.css';

import ImportProductDelete from './ImportProductDelete';
import ImportProductEdit from './ImportProductEdit';
import ImportProductAddNew from './ImportProductAddNew';
import _ from "lodash";


const TableImportProduct = (props) => {

    const [listImportProduct, setListImportProduct] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataImportProductEdit, setDataImportProductEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataImportProductDelete, setDataImportProductDelete] = useState({})



    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (importProduct) => {
        setListImportProduct([importProduct, ...listImportProduct])
    }
    // const handleEditImportProductFromModal = (brand) => {
    //     let cloneListImportProduct = _.cloneDeep(listImportProduct);

    //     let index = listImportProduct.findIndex(item => item.id === brand.id);
    //     cloneListImportProduct[index].nameType = brand.nameType;
    //     cloneListImportProduct[index].description = brand.description;
    //     setListImportProduct(cloneListImportProduct);
    // }

    //call api getallImportProduct
    useEffect(() => {

        getImportProduct();
    }, [])

    const getImportProduct = async () => {
        let res = await getAllImportProduct();
        if (res && res.data) {
            setListImportProduct(res.data)
        }
    }

    //Sửa sản phẩm
    const handleEditImportProduct = (importProduct) => {
        setDataImportProductEdit(importProduct);
        setIsShowModalEdit(true);
    }

    //Xóa Sản phẩm
    const handleDeleteImportProduct = (importProduct) => {
        setIsShowDelete(true);
        setDataImportProductDelete(importProduct);

    }
    const handleDeleteImportProductFromModal = (importProduct) => {
        let cloneListImportProduct = _.cloneDeep(listImportProduct);
        cloneListImportProduct = cloneListImportProduct.filter(item => item.id !== importProduct.id);
        setListImportProduct(cloneListImportProduct);
    }
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <button className='btn btn-danger d-flex justify-content-end'
                                onClick={() => setIsShowModalAddNew(true)}
                            >Thêm loại xe</button>
                        </div>
                        < Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên loại xe</th>
                                    <th>Mô tả</th>
                                    <th>Hành Động</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listImportProduct && listImportProduct.length > 0 &&
                                    listImportProduct.map((item, index) => {
                                        return (
                                            <tr key={`importProduct-${index}`}>
                                                <td>{item.id}</td>
                                                <td>{item.nameType}</td>

                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditImportProduct(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteImportProduct(item)}
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
            {/* <ImportProductAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            /> */}

            {/* Sua */}
            {/* <ImportProductEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataImportProductEdit={dataImportProductEdit}
                handleEditImportProductFromModal={handleEditImportProductFromModal}

            /> */}

            {/* Xoa */}
            {/* <ImportProductDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataImportProductDelete={dataImportProductDelete}
                handleDeleteImportProductFromModal={handleDeleteImportProductFromModal}
            /> */}
        </>

    )
}
export default TableImportProduct;