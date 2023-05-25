import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import productApi from "../../services/productApi";

const Product = (props) => {
  const { Id, Name, Price, Status, Image, Description, Quantity } = props
  const [detail, setDetail] = useState("");

  // useEffect(() => {
  //   // handleDetail();
  //   let idProduct = async () => {
  //     const res = await productApi.get({ Id });
  //     console.log(res.data);
  //     return res;
  //   }

  //   idProduct().then((res) => setDetail(res.data));

  //   idProduct().catch((err) => console.log(err));
  // }, []);
  // console.log(detail);
  // const handleDetail = () => {


  // }
  return (
    <div>
      <section className="py-5 bg-light">

        {/* <div className="col mb-7"> */}
        <div className="card ">
          <img
            className="card-img-top"
            src=
            "https://cdn.honda.com.vn/motorbike-versions/March2023/j37sLOXkDQsdX7nnBTOj.png"
            // {Image}
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{Name}</h5>
              {Price} VNĐ
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"
            // onClick={handleDetail(Id)}
            >
              <Link className="btn btn-outline-primary mt-auto"

                to="/detail">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div >
  );
};

export default Product;
