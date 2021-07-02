import React from 'react';
import DevelopmentData from './DevelopmentData';
import { IOSData,IOSTitleData,IOSHeadData  } from './DataJson';
import { Container, Row, Col, Button,Card,CardImg,CardHeader} from 'reactstrap';
import {Link} from "react-router-dom";
import "./developmentservices.css"

const IOSDevelopment = () => {
    let align = false;
    const showServices = IOSData.map((content, idx) => {
        let tempAlign = align ? 'left' : 'right';
        align = !align;
        return (
            <DevelopmentData
                key={idx}
                id={idx}
                heading={content.heading}
                btnData={content.btnData}
                desc={content.desc}
                type="bodydevelopment"
                alignment={tempAlign}
                img={content.image}
            />
        )
    })
    const showTitles = IOSTitleData.map((content, idx) => {
        let tempAlign = align ? 'left' : 'right';
        align = !align;
        return (
            <DevelopmentData
                key={idx}
                id={idx}
                heading={content.heading}
                btnData={content.btnData}
                desc={content.desc}
                type="bodydevelopment"
                alignment={tempAlign}
                img={content.image}
            />
        )
    })
    return (
        <React.Fragment>
            <Container className="mt-5">
                <DevelopmentData
                    heading={IOSHeadData.heading}
                    type="mainHead"
                    desc={IOSHeadData.desc}
                    img={IOSHeadData.image}
                    btnData={IOSHeadData.btnData}
                    alignment="right"
                />
                <Row className="text-center bg-light">
                    <Col md="12" className="fs-1 fw-bold mb-4"> Our Services</Col>
                    <Col md="12" className="fs-4 mb-5"> Be it a simple app or an enterprise-grade complex solution, we are the right fit for you.</Col>
                </Row>
            </Container>
            <Container className="mt-4 mb-4">
                {showTitles}
                <Row>
                    <Col md="2">
                    </Col>
                    <Col md="8" style={{backgroundColor:"rgb(248, 248, 248)",marginBottom:"50px"}}>
                    <Col style={{fontSize:"37px",fontWeight:"bold",textAlign:"center",marginBottom:"60px",marginTop:"40px"}}>Our custom mobile app development services</Col>
                    </Col>
                    <Col md="2">
                    </Col>
                </Row>
                {showServices}
                <Row>
                    <Col md="1">
                    </Col>
                    <Col md="10" className="title text-center " >
                    Our app development services have been used to reach and engage with a number of communities across a range of sectors.</Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row >
                    <Col md="3">
                    </Col>
                    <Col md="6" style={{backgroundColor:"rgb(250, 250, 250)",fontSize:"46px",fontWeight:"580"}} className="mt-5 text-center " >
                   Other Services
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
                <Row>
                    <Col md="1">
                    </Col>
                    <Col md="10" className="title text-center mb-6" >
                    We offer digital product solutions for every stage of your business development. You can trust us not only with your product development, but also with your product strategy and product design. </Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row style={{height:"80px"}}>

                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col md="4" >
                    <Link to="/services/product-design">
                        <Card >
                            <CardImg src={IOSHeadData.image}>
                            </CardImg>
                            <CardHeader className="text-center fw-bold">
                                Product Design
                            </CardHeader>
                        </Card>
                    </Link>
                    </Col>
                    <Col md="2" xs="12" style={{height:"80px"}}>
                    </Col>
                   
                    <Col md="4">
                    <Link to="/services/product-strategy">
                    <Card  >
                    <CardImg src={IOSHeadData.image} />
                    <CardHeader className="text-center fw-bold">
                        Product Strategy
                    </CardHeader>
                    </Card>
                    </Link>
                    </Col>
                    <Col md="1"></Col>
                </Row>
                <Row style={{height:"100px"}}>
                </Row>
                <Row className="text-center mt-4 mb-5">
                    <Col md="12" className="fs-1 fw-bold mb-5">
                    Ready to bring your app idea to life?
                    </Col>
                    
                    <Col>
                    <Link to="/contact"><Button className="mt-4 mb-5 SubmitBtn">Lets Talk</Button></Link>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default IOSDevelopment;