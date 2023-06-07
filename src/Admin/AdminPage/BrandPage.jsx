import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';
import TableBrand from "../AdBrand/TableBrand";



const BrandPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <TableBrand />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrandPage;