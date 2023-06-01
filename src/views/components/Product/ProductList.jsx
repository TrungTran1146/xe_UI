import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import productApi from "../../services/productApi";

import './Product.css';
import { getAllProduct } from "../../services/productApi";
import { Link } from "react-router-dom";


const ProductList = () => {

  const [products, setAllProduct] = React.useState([]);


  useEffect(() => {

    getAllProducts();
  }, [])
  const getAllProducts = async () => {
    let res = await getAllProduct();
    if (res && res.data)
      setAllProduct(res.data);
  }
  return (
    <>

      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Sản Phẩm</h1>
          <p>Chất lượng - Giá tốt - Bền bỉ</p>
        </div>
      </div >

      {/* Sản phẩm */}
      <div className="container">
        < div class="row " >
          {products.map((product) => {
            return (
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div key={product.id}>
                  <div className="my-3 bg-light">
                    <div className="card ">
                      <img
                        className="card-img-top"
                        src=
                        "https://cdn.honda.com.vn/motorbikes/September2022/wv6DBlyu0DLd4DeEFQVU.jpg"
                        // {Image}
                        alt="..." />
                      {/* Giá và tên */}
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder text-danger">{product.name}</h5>
                          {product.price} VNĐ
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
