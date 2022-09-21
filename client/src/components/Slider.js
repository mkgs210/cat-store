import React from 'react';
import cg0 from '../img/cg0_cr.jpg';
import cg1 from '../img/cg1_cr.jpg';
import cg2 from '../img/cg2_cr.jpg';
import cg3 from '../img/cg3_cr.jpg';
import cg4 from '../img/cg4_cr.jpg';
import cg5 from '../img/cg5_cr.jpg';
import cg6 from '../img/cg6_cr.jpg';
import cg7 from '../img/cg7_cr.jpg';
import cg8 from '../img/cg8_cr.jpg';
import cg9 from '../img/cg9_cr.jpg';
import cg10 from '../img/cg10_cr.jpg';
import cg11 from '../img/cg11_cr.jpg';
import cg12 from '../img/cg12_cr.jpg';
import cg13 from '../img/cg13_cr.jpg';
import cg14 from '../img/cg14_cr.jpg';
import cg15 from '../img/cg15_cr.jpg';
import cg16 from '../img/cg16_cr.jpg';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

    return (
        <Carousel style={{ 'max-width': '100%'}}>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={cg0}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Зимний котик</h3>
                    <p>Согреет по вечерам!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cg1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Осенний котэ</h3>
                    <p>Можно вместе прыгать в кучу листьев!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cg4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Летний кошак</h3>
                    <p>Будет охотиться на бабочек!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;