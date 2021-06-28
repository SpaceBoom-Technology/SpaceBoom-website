import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Authors } from "../../AuthorDetails/AuthorDetails";
import Author from "../../AuthorDetails/Author";
import { propTypes } from 'react-bootstrap/esm/Image';

const AuthorCarousel = (props) => {
    const [isMobile, isMobileUpdated] = useState(window.innerWidth >= 1000 ? false : true);
    let sizeCheck;
    if (Authors.length > 3)
        sizeCheck = 3;
    let sizechkMobile;
    if (Authors.length > 1)
        sizechkMobile = 1;

    const size = isMobile ? sizechkMobile : sizeCheck;
    let [counter, setCounter] = useState(size);
    const limitdata = []
    counter = counter - size < 0 ? size : counter;
    for (let i = counter - size; i < counter; i++) {
        limitdata.push(Authors[i]);
    }
    const thumbnail = limitdata.map((content, id) => {
        return (<Author key={content.id}
            id={content.id}
            img={content.ProfilePicture}
            desc={content.desc}
            name={content.username} />)
    })
    useEffect(() => {
        window.addEventListener('resize', UpdateRes);
        return () => {
            window.removeEventListener('resize', UpdateRes)
        }
    }, [])
    const UpdateRes = () => {
        isMobileUpdated(window.innerWidth >= 1000 ? false : true)
    }
    return (
        <Container>
            <Row>
                <Col md="12" className="homepage-container-3-title">{props.heading}
                </Col>
                <Col md="12" className="homepage-container-3-text1">{props.desc}
                </Col>
            </Row>
            <Row>
                <Col md="1">
                </Col>
                <Col md="10">
                    <Row className={(counter !== 1) ? "Maincontainer" : ""}  >
                        {thumbnail}

                    </Row>
                </Col>
                <Col md="1">
                </Col>
            </Row>

            <Row className="">
                <Col md="3" xs="1">
                </Col>
                <Col md="1" xs="2" className="ArrowBtn" style={counter > size ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <h1><i className="fas fa-angle-left " onClick={() => {
                        counter > size ? setCounter(counter - 1) : setCounter(counter)
                    }}></i></h1>
                </Col>
                <Col md="4" xs="6" >
                    <hr style={{ width: "85%", borderBlockStyle: "solid" }}></hr>
                </Col>
                <Col md="1" xs="2" className="ArrowBtn" style={counter < Authors.length ? { visibility: "visible" } : { visibility: "hidden" }}>
                    <h1><i className="fas fa-angle-right" onClick={() => {
                        counter < Authors.length ? setCounter(counter + 1) : setCounter(counter)
                    }}></i></h1>
                </Col>
                <Col md="3" xs="1">
                </Col>

            </Row>
        </Container>
    )
}

export default AuthorCarousel;