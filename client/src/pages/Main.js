import React from 'react';
import Slider from '../components/Slider'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import cg7 from '../img/cg7_cr.jpg';
import cg5 from '../img/cg5_cr.jpg';
import cg6 from '../img/cg6_cr.jpg';

export const Main = () => (

    <>

        <Container style={{ paddingTop: '2rem',  width: '72%', 'justify-content':'center', margin:'0 auto'}}>
            <Slider />
        </Container>

    </>
)
export default Main;

/*<Container style={{ paddingTop: '2rem', paddingBottom:'2rem' }}>
            <Row>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant='top' src={cg7} />
                        <Card.Body>
                            <Card.Title>sjdalkd</Card.Title>
                            <Card.Text>
                                slkdflkasmlkad
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant='top' src={cg5} />
                        <Card.Body>
                            <Card.Title>sjdalkd</Card.Title>
                            <Card.Text>
                                slkdflkasmlkad
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant='top' src={cg6} />
                        <Card.Body>
                            <Card.Title>sjdalkd</Card.Title>
                            <Card.Text>
                                slkdflkasmlkad
                            </Card.Text>
                            <Button variant='primary'>Learn more</Button>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </Container>*/