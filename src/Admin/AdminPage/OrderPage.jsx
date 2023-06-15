import React from "react";
import Sidebar from "../Sidebar/Sidebar";


import { Container, Row, Col } from 'react-bootstrap';


const OrderPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    {/* <TableTypeCar /> */}
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;