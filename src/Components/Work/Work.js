import React from 'react';
import Logo from './../../logo192.png';
import { Container, Row, Col } from 'reactstrap';
import ServiceData from '../Services/Elem/ServiceData';

const Work = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="text-center mt-5 mb-5">
                    <Col md="12">
                        <img src={Logo} />
                    </Col>
                    <Col md="12" className="fs-1 fw-bold">
                        Featured client projects
                    </Col>
                    <Col md="12" className="fs-5">
                        We know how to build products that can scale to your business' needs, regardless if you're a startup, an enterprise, or a governmental organization.
                    </Col>
                </Row>
                <ServiceData
                    heading="Staffcloud"
                    type="normalHead"
                    desc="Staffcloud keeps you up-to-date on your job assignments. Your scheduling and your communication with your employer will be a walk in the park."
                    img={Logo}
                    points={[]}
                    btnData="view case study"
                    alignment="right"
                />
                <ServiceData
                    heading="Staffcloud"
                    type="normalHead"
                    desc="Staffcloud keeps you up-to-date on your job assignments. Your scheduling and your communication with your employer will be a walk in the park."
                    img={Logo}
                    points={[]}
                    btnData="view case study"
                    alignment="left"
                />
                <ServiceData
                    heading="Staffcloud"
                    type="normalHead"
                    desc="Staffcloud keeps you up-to-date on your job assignments. Your scheduling and your communication with your employer will be a walk in the park."
                    img={Logo}
                    points={[]}
                    btnData="view case study"
                    alignment="right"
                />
                <Row>
                    <Col>
                        Other featured products
                    </Col>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default Work;