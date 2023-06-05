import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import ProductAddNew from './ProductAddNew';
import { getAllProduct } from '../../services/productApi';
import { Button } from 'bootstrap';
import './Product.css';
import ProductDelete from './ProductDelete';


const TableProduct = (props) => {

    const [listProduct, setListProduct] = useState([]);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);


    const [isShowDelete, setIsShowDelete] = useState(false);
    const [dataProductDelete, setDataProductDelete] = useState({})
    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowDelete(false);
    }

    const handleUpdateTable = (user) => {
        setListProduct([user, ...listProduct])
    }


    useEffect(() => {
        //call api
        getProduct();
    }, [])






    const getProduct = async () => {
        let res = await getAllProduct();
        if (res && res.data) {
            // console.log(res);
            // setTotalUser(res.total);
            // setTotalPages(res.total_pages)
            setListProduct(res.data);
        }

    }

    //Sửa sản phẩm
    const handleEditProduct = () => {
        alert("trung nef")
    }
    //Xóa Sản phẩm
    const handleDeleteProduct = (product) => {
        setIsShowDelete(true);
        setDataProductDelete(product);

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
                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn-edit' onClick={handleEditProduct}
                                                    ><i className="bi bi-pencil "></i></button>
                                                    <button className='btn-delete ' onClick={() => handleDeleteProduct(item)}
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
            <ProductAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable} />
            <ProductDelete
                show={isShowDelete}
                handleClose={handleClose}
                dataProductDelete={dataProductDelete}
            />
        </>

    )
}
export default TableProduct;