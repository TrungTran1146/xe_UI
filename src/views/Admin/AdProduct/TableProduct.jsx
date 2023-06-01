import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import ProductAddNew from './ProductAddNew';
import { getAllProduct } from '../../services/productApi';



const TableProduct = (props) => {

    const [listProduct, setListProduct] = useState([]);



    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false);
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
        console.log('product', res.data);
    }

    // const handlePageClick = (event) => {
    //     // console.log(event);
    //     getProduct(+event.selected + 1);
    // }
    return (
        <>

            <div className="row">
                <div className=''>
                    <div className=''>
                        <div className='my-3 add-new'>
                            <span><b>List Users:</b></span>
                            <button className='btn btn-danger'
                                onClick={() => setIsShowModalAddNew(true)}
                            >Add new User</button>
                        </div>
                        < Table striped bordered hover >
                            {/* className='d-flex justify-content-end' > */}
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
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
                                                <td>{item.status}</td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </ Table>
                    </div>
                </div>
            </div>


            <ProductAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable} />
        </>

    )
}
export default TableProduct;