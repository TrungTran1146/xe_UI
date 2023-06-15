import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

import { getAllTypeCar } from '../../services/typeCarApi';
import { Button } from 'bootstrap';
import './TypeCar.css';

import TypeCarDelete from './TypeCarDelete';
import TypeCarEdit from './TypeCarEdit';
import TypeCarAddNew from './TypeCarAddNew';
import _ from "lodash";


const TableImportProduct = (props) => {

    const [listTypeCar, setListTypeCar] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataTypeCarEdit, setDataTypeCarEdit] = useState({});


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataTypeCarDelete, setDataTypeCarDelete] = useState({})



    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (typeCar) => {
        setListTypeCar([typeCar, ...listTypeCar])
    }
    const handleEditTypeCarFromModal = (brand) => {
        let cloneListTypeCar = _.cloneDeep(listTypeCar);

        let index = listTypeCar.findIndex(item => item.id === brand.id);
        cloneListTypeCar[index].nameType = brand.nameType;
        cloneListTypeCar[index].description = brand.description;
        setListTypeCar(cloneListTypeCar);
    }

    //call api getallTypeCar
    useEffect(() => {

        getTypeCar();
    }, [])

    const getTypeCar = async () => {
        let res = await getAllTypeCar();
        if (res && res.data) {
            setListTypeCar(res.data)
        }
    }

    //Sửa sản phẩm
    const handleEditTypeCar = (typeCar) => {
        setDataTypeCarEdit(typeCar);
        setIsShowModalEdit(true);
    }

    //Xóa Sản phẩm
    const handleDeleteTypeCar = (typeCar) => {
        setIsShowDelete(true);
        setDataTypeCarDelete(typeCar);

    }
    const handleDeleteTypeCarFromModal = (typeCar) => {
        let cloneListTypeCar = _.cloneDeep(listTypeCar);
        cloneListTypeCar = cloneListTypeCar.filter(item => item.id !== typeCar.id);
        setListTypeCar(cloneListTypeCar);
    }
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <h1 className='text-center'>Quản lý loại xe</h1>
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
                                {listTypeCar && listTypeCar.length > 0 &&
                                    listTypeCar.map((item, index) => {
                                        return (
                                            <tr key={`typeCar-${index}`}>
                                                <td>{item.id}</td>
                                                <td>{item.nameType}</td>

                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn-edit'
                                                        onClick={() => handleEditTypeCar(item)}
                                                    ><i className="bi bi-pencil "></i>
                                                    </button>

                                                    <button className='btn-delete '
                                                        onClick={() => handleDeleteTypeCar(item)}
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
            <TypeCarAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />

            {/* Sua */}
            <TypeCarEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataTypeCarEdit={dataTypeCarEdit}
                handleEditTypeCarFromModal={handleEditTypeCarFromModal}

            />

            {/* Xoa */}
            <TypeCarDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataTypeCarDelete={dataTypeCarDelete}
                handleDeleteTypeCarFromModal={handleDeleteTypeCarFromModal}
            />
        </>

    )
}
export default TableImportProduct;