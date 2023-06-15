import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TableProduct from "../AdProduct/TableProduct";

import { Container, Row, Col } from 'react-bootstrap';



const ADProductPage = () => {
    return (
        <div>

            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        <TableProduct />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ADProductPage;