import './Footer.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    const footerItems = ['WORK', 'SERVICES', 'ABOUT US', 'JOIN US', 'BLOG', 'CONTACT']
    const footerLink = ['work', 'services', 'about', 'join', 'blog', 'contact']
    const showItems = footerItems.map((content, idx) => {
        return (
            <Col xs="4" md="2" className="mb-3">
                <a className=" navitems" href={'/' + footerLink[idx]}>
                    {content}
                </a>
            </Col>)
    })
    return (
        <React.Fragment>
            <Container fluid className="footer-main text-center">
                <Row>
                    <Col md="8">
                        <Row className="mt-4">
                            {showItems}
                        </Row>
                        <Row className="social-icons">
                            <Col xs="1" md="1">
                                <i className="fab fa-facebook-square fb-icon fs-3"></i>
                            </Col>
                            <Col xs="1" md="1">
                                <i className="fab fa-google-plus-square google-icon fs-3"></i>
                            </Col>
                            <Col xs="1" md="1">
                                <i className="fab fa-twitter-square twitter-icon fs-3"></i>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="mt-4">
                            <Col md="12">
                                SpaceBoom Logo
                            </Col>
                            <Col md="12" className="mt-2 mb-4">
                                © 2021 SpaceBoom Technology
                                All rights reserved
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Footer;