import React from 'react';
import './../Home.css';
import { Container, Col, Row, Button } from 'reactstrap';
import logo from '../../../logo192.png';
const Container3 = () => {



    return (
        <React.Fragment>
            <Container fluid>
                <Row className="Shop " style={{ paddingTop: "60px" }}>
                    <Col md="1">
                    </Col>
                    <Col md="3" sx="12" >
                        <img src={logo} alt="none" />
                    </Col>
                    <Col md="7">
                        <Row style={{ marginTop: "40px" }}>
                            <div>
                                <hr style={{ border: "4px solid ", width: "70px", color: "black", float: "left", marginBottom: "40px", marginTop: "40px" }}></hr>
                            </div>
                            <Col md="12" style={{ fontWeight: "bold", fontSize: "38px", paddingBottom: "30px", marginLeft: "20px" }}>From A to App Success
                            </Col>
                            <Col md="5" style={{ fontWeight: "lighter", fontSize: "24px", paddingBottom: "40px", marginLeft: "20px", fontWeight: "lighter", fontSize: "23px" }}>How to turn Ideas into apps that makes a difference
                            </Col>
                        </Row>
                        <Row>

                            <Col className="btn" md="4">
                                <Button outline color="primary" className="custom-btn" aria-pressed="true" >
                                    Download the ebook for free
                                </Button>
                            </Col>
                            <Col className="btn" md="4">
                                <input type="image" src="./static/images/amazon3.png" value="submit" alt="none" style={{ borderRadius: "31%", width: "54%" }} />
                            </Col>
                            <Col md="4">
                            </Col>

                        </Row>
                    </Col>
                    <Col md="1">


                    </Col>
                </Row>

            </Container>

        </React.Fragment>
    )
}

export default Container3;

