import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Card style={{ width: '100%'}} >
                        <Card.Img variant='top' src={process.env.REACT_APP_API_URL + device.img} />
                        <h4 className="mt-1 d-flex justify-content-between align-items-center">
                            <div>{device.name}</div>
                            <div className="d-flex align-items-center">
                                <div>{device.price}</div>
                            </div>

                        </h4><div variant='primary'>Скорее бронируй по номеру +7(800)555-35-35</div>
                    </Card>
                </Col>

                <Col>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: '100%'}}
                    >

                        <h1>Характеристики</h1>
                        {device.info.map((info, index) =>
                            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>)}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;
