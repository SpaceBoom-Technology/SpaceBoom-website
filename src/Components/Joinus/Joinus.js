import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {data } from "./Datajoin";
import JoinData from "./JoinData";
import AuthorCarousel from '../Home/AuthorCarousel/AuthorCarousel';
import { useSelector } from 'react-redux';
import "./JoinData.css"
import image from "../Services/Elem/amongUs.jpg"
const Joinus = () => {
    const isMobile = useSelector(state => state.isMobile)
    return (
        <React.Fragment>
            <Container fluid >
                <Row style={{backgroundImage:`url(${image})`,height:"500px" , backgroundSize:"cover",opacity:"0.4"}} >
                </Row>

            </Container>
            <Container className="mt-5">
                
                <Row className="text-center bg-light">
                    <Col md="12" className="fs-1 fw-bold mb-4"> Join Us</Col>
                    <Col md="12" className="fs-4 mb-5">We are looking for entrepreneurial people that love working with others on technology that improves people’s lives. Our main focus are mobile apps but we’re always looking into the future and exploring things like AI, AR, IoT, and more. We like to get the job done but we also like to have fun. </Col>
                    <Col><a className="SubmitBtn services-inline-link" href="#join-us-container-4">Check out the open positions.</a></Col>
                </Row>
                
                <Row >
                <Col md="12" className="fs-1 fw-bold mb-4 text-center" style={{marginTop:"40px"}}> Enough Reasons to say YES</Col>
                </Row>
            </Container>
            <Container className="mt-5">
            <Row>
                <Col md="1">
                </Col>
                <Col md="10">
                    <Row className="cardcarousel"  >
                        {data.map((content,id)=>{
                             return (<JoinData key={content.id}
                                id={content.id}
                                img={content.image}
                                desc={content.desc}
                                name={content.heading} />)
                        })}
                    </Row>

                </Col>
                <Col md="1">
                </Col>
            </Row>
            <AuthorCarousel heading="Inside Information" />
            <Row className="text-center mt-5 mb-5">
                    <Col md="12" className="fs-1 fw-bold mb-5">
                        We need you
                    </Col>
                    <Col md="12" className="fs-4 mb-5">
                        <Row>
                            <Col md="3" className="bg-light">
                                iOs Developer
                            </Col>
                            <Col md="3" className="bg-light">
                                Android Developer
                            </Col>
                            <Col md="3" className="bg-light">
                                Full Stack Developer
                            </Col>
                            <Col md="3" className="bg-light">
                                Creative Digital Marketer
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Button className="SubmitBtn mb-5">
                            Get in touch
                        </Button>
                    </Col>
                </Row>
            </Container>

            
        </React.Fragment>
    )
}

export default Joinus;