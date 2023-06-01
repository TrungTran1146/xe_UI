import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TableProduct from "../AdProduct/TableProduct";
import { Container } from "react-bootstrap";




const ADProductPage = () => {
    return (
        <div>
            {/* <Sidebar /> */}
            <Container>
                <TableProduct />
            </Container>

        </div>
    );
};

export default ADProductPage;