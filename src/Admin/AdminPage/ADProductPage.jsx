import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import TableProduct from "../AdProduct/TableProduct";

import { Container, Row, Col } from 'react-bootstrap';



const ADProductPage = () => {
    return (
        <div>
            {/* <Sidebar />
            <Container>

            </Container> */}
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