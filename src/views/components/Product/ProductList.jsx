import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import productApi from "../../services/productApi";
import Product from "./Product";
import './Product.css';
const ProductList = () => {

  const [products, setAllProduct] = React.useState([]);

  useEffect(() => {
    const allProducts = async () => {
      const res = await productApi.getAll();
      console.log(res.data);
      return res;
    }

    allProducts().then((res) => setAllProduct(res.data));

    allProducts().catch((err) => console.log(err));

  }, []);

  return (
    <div>
      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Sản Phẩm</h1>
          <p>Chất lượng - Giá tốt - Bền bỉ</p>
        </div>
      </div >
      {/* <div className="container">
        <div className="col px-xl-5">*/}
      {/* < div class="row d-flex" > */}
      <div className="col-lg-6">
        < div className='moto-container' >
          {
            products.map((product) => {
              return (
                <div key={product.id}>
                  <Product
                    Id={product.id}
                    Name={product.name}
                    Price={product.price}
                    Status={product.status}
                    Image={product.image}
                    Description={product.description}
                    Quantity={product.quantity}

                  />
                </div>
              );
            })
          }
        </div>


      </div >
    </div >
    // </div >
    // </div >
    // </div >
  );
};

export default ProductList;
