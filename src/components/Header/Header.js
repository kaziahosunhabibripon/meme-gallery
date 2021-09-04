import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Container fluid className="header">
            <Row className="m-0 p-0">
                <Col>
                    <h1>Meme Gallery</h1>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col>
                    <h2 ><span className="header-bottom"><Link to='/stats'>See Stats</Link></span></h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
