import React from 'react';
import ServiceData from './ServiceData';
import {  Data3,DesignHeadData,DesignData } from './DataJson';
import { Container, Row, Col, Button,Card,CardImg,CardHeader} from 'reactstrap';
import {Link} from "react-router-dom";
import "./ourservices.css"

const Design = () => {
    let align = true;
    const showServices = DesignData.map((content, idx) => {
        let tempAlign = align ? 'left' : 'right';
        align = !align;
        return (
            <ServiceData
                key={idx}
                id={idx}
                heading={content.heading}
                title={content.title}
                desc={content.desc}
                type="body"
                alignment={tempAlign}
                img={content.image}
            />
        )
    })
    return (
        <React.Fragment>
            <Container className="mt-5">
                <ServiceData
                    heading={DesignHeadData.heading}
                    type="mainHead"
                    desc={DesignHeadData.desc}
                    img={DesignHeadData.image}
                    btnData={DesignHeadData.btnData}
                    alignment="right"
                />
                
            </Container>
            <Container className="mt-8 mb-4" style={{marginTop:"120px"}}>
                <ServiceData
                    heading={Data3.heading}
                    type="data1"
                    desc={Data3.desc}
                    img={Data3.image}
                    alignment="left"
                    />
                    <Row className="text-center ">
                    <Col md="1">
                    </Col>
                    <Col md="10" className="bg-light">
                    <Col md="12" className="fs-1 fw-bold mb-4">Our App Design Process</Col>
                    <Col md="12" className="fs-4 mb-5">  We combine our team’s depth of experience in design, our client’s intimate knowledge of the industries they serve and insights uncovered through the product strategy phase.</Col>
                    </Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row style={{height:"120px"}}>

                </Row>
                
                {showServices}
                <Row>
                    <Col md="1">
                    </Col>
                    <Col md="10" className="title text-center " >
                    Our app design services have been used to reach and engage with a number of communities across a range of sectors.</Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row >
                    <Col md="1">
                    </Col>
                    <Col md="10">
                    <Row>
                    <Col md="3">
                    </Col>
                    <Col md="6" style={{backgroundColor:"rgb(238, 241, 241)",fontSize:"42px",fontWeight:"650",height:"100px"}} className="mt-5 text-center" >
                      <div style={{marginTop:"30px"}}> Other Services </div>  </Col>
                    <Col md="3">
                    </Col>
                    <Col md="12" className="title text-center mb-6 " style={{fontWeight:"420"}} >
                    We offer digital product solutions for every stage of your business development. You can trust us not only with your product development, but also with your product strategy and product design. </Col> 
                    </Row>
                    </Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row>
                    <Col md="1">
                    </Col>
                     <Col md="1">
                    </Col>
                </Row>
                <Row style={{height:"80px"}}>

                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col md="4">
                    <Link to="/services/product-strategy">
                        <Card style={{}}>
                            <CardImg src={DesignHeadData.image}>
                            </CardImg>
                            <CardHeader className="text-center fw-bold">
                                Product Strategy
                            </CardHeader>
                        </Card>
                    </Link>
                    </Col>
                    
                    <Col md="2">
                        
                    </Col>
                   
                    <Col md="4">
                    <Link to="/services/product-development">
                    <Card >
                    <CardImg src={DesignHeadData.image} />
                    <CardHeader className="text-center fw-bold">
                        Product Development
                    </CardHeader>
                    </Card>
                    </Link>
                    </Col>
                    <Col md="1"></Col>
                </Row>
                <Row className="text-center mt-5 mb-5">
                    <Col md="12" className="fs-1 fw-bold mb-5">
                    Ready to bring your app idea to life?
                    </Col>
                    
                    <Col>
                        <Button className="SubmitBtn mb-5">
                            Let's Talk
                        </Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Design;