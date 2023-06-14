import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllBrand } from '../../services/brandApi';
import { Button } from 'bootstrap';
import './Brand.css';

import BrandDelete from './BrandDelete';
import BrandEdit from './BrandEdit';
import BrandAddNew from './BrandAddNew';
import _ from "lodash";


const TableBrand = (props) => {

    const [listBrand, setListBrand] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataBrandEdit, setDataBrandEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataBrandDelete, setDataBrandDelete] = useState({})



    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (brand) => {
        setListBrand([brand, ...listBrand])
    }


    const handleEditBrandFromModal = (brand) => {
        let cloneListBrand = _.cloneDeep(listBrand);

        let index = listBrand.findIndex(item => item.id === brand.id);
        cloneListBrand[index].brandName = brand.brandName;
        cloneListBrand[index].description = brand.description;
        setListBrand(cloneListBrand);
    }

    //call api getallBrand
    useEffect(() => {

        getBrand();
    }, [])

    const getBrand = async () => {
        let res = await getAllBrand();
        if (res && res.data) {
            setListBrand(res.data)
        }
    }

    //Sửa sản phẩm
    const handleEditBrand = (brand) => {
        setDataBrandEdit(brand);
        setIsShowModalEdit(true);
    }

    //Xóa Sản phẩm
    const handleDeleteBrand = (brand) => {
        setIsShowDelete(true);
        setDataBrandDelete(brand);

    }
    const handleDeleteBrandFromModal = (brand) => {
        let cloneListBrand = _.cloneDeep(listBrand);
        cloneListBrand = cloneListBrand.filter(item => item.id !== brand.id);
        setListBrand(cloneListBrand);
    }
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <h1>Quản lý hãng xe</h1>
                            <button className='btn btn-danger d-flex justify-content-end'
                                onClick={() => setIsShowModalAddNew(true)}
                            >Thêm hãng xe</button>
                        </div>
                        < Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên hãng xe</th>
                                    <th>Mô tả</th>
                                    <th>Hành Động</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listBrand && listBrand.length > 0 &&
                                    listBrand.map((item, index) => {
                                        return (
                                            <tr key={`brand-${index}`}>
                                                <td>{item.id}</td>
                                                <td>{item.brandName}</td>

                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditBrand(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteBrand(item)}
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
            <BrandAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />

            {/* Sua */}
            <BrandEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataBrandEdit={dataBrandEdit}
                handleEditBrandFromModal={handleEditBrandFromModal}
            />

            {/* Xoa */}
            <BrandDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataBrandDelete={dataBrandDelete}
                handleDeleteBrandFromModal={handleDeleteBrandFromModal}
            />
        </>

    )
}
export default TableBrand;