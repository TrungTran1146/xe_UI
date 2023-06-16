import React from "react";
import Sidebar from "../Sidebar/Sidebar";


import { Container, Row, Col } from 'react-bootstrap';
import TableOrder from "../AdOrder/TableOrder";


const OrderPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <TableOrder />
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPage;