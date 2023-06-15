import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';
import TableBrand from "../AdBrand/TableBrand";



const BrandPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        <TableBrand />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrandPage;