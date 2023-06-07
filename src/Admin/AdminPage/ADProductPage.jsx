import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TableProduct from "../AdProduct/TableProduct";

import { Container, Row, Col } from 'react-bootstrap';



const ADProductPage = () => {
    return (
        <div>

            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <TableProduct />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ADProductPage;