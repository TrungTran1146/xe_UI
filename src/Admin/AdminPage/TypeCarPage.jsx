import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';
import TableTypeCar from "../AdTypeCar/TableTypeCar";



const TypeCarPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <TableTypeCar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TypeCarPage;