import './ServiceData.css';
import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useSelector } from 'react-redux';

const ServiceData = (props) => {
    const isMobile = useSelector(state => state.isMobile)
    const points = props.points.map((content, idx) => {
        return (
            <Col md="6" className="mb-3 fs-5 fw-lighter" key={idx}>
                <Row>
                    <Col xs="1" md="2">
                        <i className={content.logo}></i>
                    </Col>
                    <Col xs="" md="">{content.name}</Col>
                </Row>
            </Col>
        )
    })
    return (
        <React.Fragment>
            <Row className="mb-5">
                {props.alignment === 'left' && isMobile ?
                    <Col md="6">
                        <img className="w-100" src={props.img} alt="none"/>
                    </Col> : null
                }
                <Col>
                    <Col md="12" className={"mt-3 mb-5 fw-bold " + props.type}>{props.heading}</Col>
                    <Col md="12" className="fs-5 mb-5" > {props.desc}</Col>
                    <Row>
                        {points}
                    </Row>
                    <Col md="12">
                        <Button className="mt-4 mb-5 SubmitBtn">{props.btnData}</Button>
                    </Col>
                </Col>
                {props.alignment === 'right' || !isMobile ?
                    <Col md="6">
                        <img className="w-100" src={props.img} alt="none"/>
                    </Col> : null
                }
            </Row>
        </React.Fragment>
    )
}

export default ServiceData;