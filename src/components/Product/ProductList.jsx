import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// // import productApi from "../../services/productApi";

import './Product.css';
import { getAllProduct, getTypeProduct } from "../../services/productApi";
import { Link } from "react-router-dom";
import { getAllTypeCar } from "../../services/typeCarApi";


const ProductList = () => {

  const [listTypeCar, setListTypeCar] = useState([]);
  const [selectTypeProduct, setSelectTypeProduct] = useState('all');
  const [selectTypeCarProduct, setSelectTypeCarProduct] = useState([]);



  useEffect(() => {

    allProduct();
    getTypeCar();
    typeProduct();
  }, [])
  const typeProduct = async () => {

  }

  const getTypeCar = async () => {
    let res = await getAllTypeCar();
    if (res && res.data) {
      setListTypeCar(res.data);
    }
  }


  const allProduct = async () => {
    let res = await getAllProduct();
    if (res && res.data)
      setSelectTypeCarProduct(res.data);
  }

  const handleTypeProduct = async (event) => {
    setSelectTypeProduct(event.target.value);
    if (selectTypeProduct !== 'all') {
      const res = await getTypeProduct(selectTypeProduct);
      if (res && res.data) {
        setSelectTypeCarProduct(res.data);
      }
    } else {
      allProduct();
    }
  }

  return (
    <>

      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Sản Phẩm</h1>
          <p>Chất lượng - Giá tốt - Bền bỉ</p>
        </div>
      </div >

      <div className="container">
        <h2 >Chọn loại xe:</h2>
        <div>
          <button key='all'
            className="hide-product btn-outline-filter btn-option mr-4 btn-category"
            onClick={(e) => handleTypeProduct(e)}
            value='all'>Tất cả</button>
          {listTypeCar.map((item) => {
            return (
              <button key={item.id}
                className="hide-product btn-outline-filter btn-option mr-4 btn-category"
                onClick={(e) => handleTypeProduct(e)}
                value={item.id}
              >{item.nameType}</button>
            )
          })}
        </div>

      </div>
      {/* Sản phẩm */}
      <div className="container">
        < div className="row " >
          {selectTypeCarProduct.map((product) => {
            return (
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <div >
                  <div className="my-3 bg-light">
                    <div className="card ">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt="..." />
                      {/* Giá và tên */}
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder text-danger">{product.name}</h5>
                          {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </div>
                      </div>

                      {/* Xem chi tiết */}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link className="btn btn-outline-primary mt-auto"
                            to={`/Product/GetProductByID/${product.id}`}>
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div >
              </div>);
          })}
        </div >
      </div >
    </>
  );
};

export default ProductList;
