import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';
import TableTypeCar from "../AdTypeCar/TableTypeCar";
import TableImportProduct from "../AdNhaphang/TableImportProduct";



const ImportProductPage = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <TableImportProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImportProductPage;