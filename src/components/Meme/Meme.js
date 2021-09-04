import React from 'react';
import { Card,  Col, Container, Row } from 'react-bootstrap';
import './Meme.css';
import LeftMeme from './LeftMeme';
import RightMeme from './RightMeme';

const Meme = () => {
    const memeData = [
        {
            id: 1,
            name: 'Meme 1',
            image: "https://i.ibb.co/Jtr8h4q/child-Support.png"
        }
    ]
    const memeData2 = [
        {
            id: 1,
            name: 'Meme 1',
            image: "https://i.ibb.co/Jtr8h4q/child-Support.png"
        },
        {
            id: 2,
            name: 'Meme 2',
            image: "https://i.ibb.co/Jtr8h4q/child-Support.png"
        },
        {
            id: 3,
            name: 'Meme 3',
            image: "https://i.ibb.co/Jtr8h4q/child-Support.png"
        }
    ]

    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center">
                <Col md={8} className="left-meme">
                    {
                        memeData?.map(meme =>
                            <LeftMeme key={meme.id} meme={meme}>

                            </LeftMeme>
                        )
                    }
                </Col>
                <Col md={4} className="right-meme">
                    {
                        memeData?.map(meme =>
                            <RightMeme key={meme.id} meme={meme}>

                            </RightMeme>
                        )
                    }
                </Col>
            </Row>
            <Row>
                {
                    memeData2?.map(meme2 =>
                        <Col md={4} className="mid-meme" key={meme2.id} meme2={meme2}>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img className="p-2" variant="top" src={meme2.image} />
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <Row className="align-items-center justify-content-center">
                <Col md={4} className="left-meme">
                    {
                        memeData?.map(meme =>
                            <LeftMeme key={meme.id} meme={meme}>

                            </LeftMeme>
                        )
                    }
                </Col>
                <Col md={8} className="right-meme">
                    {
                        memeData?.map(meme =>
                            <RightMeme key={meme.id} meme={meme}>

                            </RightMeme>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Meme;
