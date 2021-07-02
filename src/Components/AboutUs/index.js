import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { HeadData ,Values,Team} from './Aboutdata/DataJson'; 
import AboutData from './Aboutdata/AboutData';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    const showValues = Values.map((content, idx) => {
        return (
            <AboutData
                key={idx}
                heading={content.heading}
                desc={content.desc}
                type="values"
                img={content.image}
            />
        )
    })
    const showTeam = Team.map((content, idx) => {
        return (
            <AboutData
                key={idx}
                heading={content.name}
                desc={content.title}
                type="values"
                img={content.image}
            />
        )
    })
    return (
        <React.Fragment>
            <Container>
            <AboutData
                    heading={HeadData.heading}
                    type="Head"
                    desc={HeadData.desc}
                    img={HeadData.image}
                />
            </Container>
            <Container className="mt-4 mb-4" style={{textAlign:"center"}}>
                <Row >
                    <Col md="12"  className="fs-1 fw-bold mb-5">Our Values
                    </Col>
                    <Col>
                    <Row md="12">
                    {showValues}
                    </Row>
                    </Col>
                </Row>
                <Row >
                    <Col md="12"  className="fs-1 fw-bold mb-5">Our Team
                    </Col>
                    <Col>
                    <Row md="12">
                    {showTeam}
                    </Row>
                    </Col>
                </Row>
                <Row className="text-center mt-5 mb-5">
                    <Col md="12" className="fs-1 fw-bold mb-5">Want to Join our Team?
                    </Col>
                    
                    <Col>
                        <Button className="SubmitBtn mb-5">
                            Know us Better
                        </Button>
                    </Col>
                </Row>
                <Row className="text-center mt-5 mb-0">
                    <Col md="12" className="fs-1 fw-bold mb-5">Ready To discuss your project?
                    </Col>
                    <Col>
                    <Link to="/contact">
                        <Button className="mt-4 mb-5 SubmitBtn">Get in Touch</Button>
                    </Link>
                    </Col>    
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default AboutUs;