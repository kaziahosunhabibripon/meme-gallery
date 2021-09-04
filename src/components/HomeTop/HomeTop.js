import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './HomeTop.CSS';
const HomeTop = () => {
    return (
        <Container fluid>
            <Row className="m-0 p-0">
                <Col md={8} className="left-meme p-2 mt-2">
                    <InputGroup className="mb-3">
                        <FormControl className="text-center"
                            placeholder="Link"
                        />
                        <Button className="btn btn-secondary">
                            Add Meme
                        </Button>
                    </InputGroup>
                </Col>
                <Col md={4} className="right-meme p-2 mt-2 text-center">
                    <Button className="btn btn-secondary">
                        Upload Meme
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeTop;
