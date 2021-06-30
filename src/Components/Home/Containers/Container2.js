import React from 'react';
import logo from '../../../logo192.png';
import './../Home.css';
import {Container,Col,Row} from 'reactstrap';
const Container2 = () => {
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col md="12" className="homepage-container-2-title">All-in-one mobile app development agency
                    </Col>
                    <Col md="12" className="homepage-container-2-text1">Whether you have an app, and you need some help to grow your business; or you have an idea of an app, we’ve got you covered.
                    </Col>
                </Row>
                <Row>
                    <Col md="1">
                    </Col>
                    <Col md="10">
                    <Row>
                        <Col className="homepage-container-2-element" md="4">
                        <img src={logo} alt="none"/>
                        <div className="homepage-container-2-element-line">______</div>
                        <p className="homepage-container-2-element-title">Product Strategy</p>
                        <p className="homepage-container-2-element-text">We analyze your idea or product, establish the requirements and give you a product plan to start or grow your business.</p>
                        </Col>

                        <Col className="homepage-container-2-element" md="4"> 
                        <img src={logo} alt="none"/>
                        <div className="homepage-container-2-element-line">______</div>
                        <p className="homepage-container-2-element-title">Product Design</p>
                        <p className="homepage-container-2-element-text">We focus on user-centered product design, making sure we tick everything on the product success checklist.</p>
                        </Col>

                        <Col className="homepage-container-2-element" md="4">
                        <img src={logo} alt="none"/>
                        <div className="homepage-container-2-element-line">______</div>
                        <p className="homepage-container-2-element-title">Product Development</p>
                        <p className="homepage-container-2-element-text">We do both Android &amp; iOS and cross-platform development, so that we're able to choose the best technology for your product.</p>
                        </Col>
                        
                    </Row>
                    
                    </Col>
                    <Col md="1">
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="homepage-container-2-title2">Building apps for businesses is our passion
                    </Col>
                    <Col md="12" className="homepage-container-2-text2">As a mobile app development agency we built apps for android and iOS, or cross-platform. Take a look at some of the apps we’ve developed since 2011.
                    </Col>
                </Row>
            </Container>
            
        </React.Fragment>
    )
}

export default Container2;