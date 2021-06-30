import Logo from './../../logo192.png';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProjectForm from './../Home/ProjectForm/ProjectForm';

const ContactUs = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="text-center mt-5 mb-5">
                    <Col md="12">
                        <img src={Logo} />
                    </Col>
                    <Col md="12" className="fs-1 fw-bold">
                        Let's Talk
                    </Col>
                    <Col md="12" className="fs-5">
                        Take a sec and tell us a bit about your project.
                    </Col>
                </Row>
                <ProjectForm />
                <Row className="text-center mt-5 mb-5 fs-5">
                    <Col md="12" className="fs-1 fw-bold">Come visit us, our city is really beautiful</Col>
                    <Col md="12" className="mt-3">
                        We live in Oradea, a city with great architecture, which has been included in the network of Art Nouveau cities, next to Barcelona, Wien or Budapest. With direct flights from major European cities, you can easily visit us.
                    </Col>
                    <Col md="12" className="mt-5 mb-2">info@mobiversal.com</Col>
                    <Col md="12" className="mb-2">+9329399342393</Col>
                    <Col md="12">Thurzó Sándor 40, Oradea 417498, Romania</Col>
                </Row>
                <Row style={{ backgroundImage: `url(${Logo})`, height: "500px", backgroundSize: "cover" }}>
                    {/* Image area */}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ContactUs;