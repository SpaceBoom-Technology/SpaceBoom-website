import React from 'react';
import ServiceData from './Elem/ServiceData';
import { data, mainHeadData } from './DataJson';
import { Container, Row, Col, Button } from 'reactstrap';
import AuthorCarousel from '../Home/AuthorCarousel/AuthorCarousel';

const Services = () => {
    let align = false;
    const showServices = data.map((content, idx) => {
        let tempAlign = align ? 'left' : 'right';
        align = !align;
        return (
            <ServiceData
                key={idx}
                heading={content.heading}
                desc={content.desc}
                type="normalHead"
                points={content.points}
                alignment={tempAlign}
                img={content.image}
                btnData={content.btnData}
            />
        )
    })
    return (
        <React.Fragment>
            <Container className="mt-5">
                <ServiceData
                    heading={mainHeadData.heading}
                    type="mainHead"
                    desc={mainHeadData.desc}
                    img={mainHeadData.image}
                    points={mainHeadData.points}
                    btnData={mainHeadData.btnData}
                    alignment="right"
                />
                <Row className="text-center bg-light">
                    <Col md="12" className="fs-1 fw-bold mb-4"> Our Services</Col>
                    <Col md="12" className="fs-4 mb-5"> Be it a simple app or an enterprise-grade complex solution, we are the right fit for you.</Col>
                </Row>
            </Container>
            <Container className="mt-4 mb-4">
                {showServices}
                <AuthorCarousel heading="See the results for yourself. Check out Our success stories" />
                <Row className="text-center mt-5 mb-5">
                    <Col md="12" className="fs-1 fw-bold mb-5">
                        Let’s choose the best option for your business
                    </Col>
                    <Col md="12" className="fs-4 mb-5">
                        Unsure about what technology would better suit your business? We can consult you on the best technology for your particular app idea.
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

export default Services;