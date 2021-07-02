import './AboutData.css';
import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const AboutData = (props) => {
    console.log("prop",props)
    return (
        <React.Fragment>
            {props.type=="Head"?
            <Row className="mb-5">
                <Col md="12">
                <Row style={{minHeight:"400px" }}>
                    <Col md="3">
                    </Col>
                    <Col md="6" style={{backgroundColor:"rgb(238, 241, 241)"}}>
                    <Row style={{minHeight:"90px" ,opacity:"0.3"}}>
                    </Row>
                    <Row style={{minHeight:"90px" ,opacity:"0.3"}}>
                    </Row>
                        <Row>
                            <Col md="3">

                            </Col>
                            <Col md="6">
                            <img  src={props.img} alt="none" style={{width:"100%"}}  />            
                            </Col>
                            <Col md="3">
                            </Col>
                    </Row>
                    <Row>
                    <Col md="12" className={"fw-bold " + props.type}>{props.heading}</Col>
                    </Row>
                    
                    </Col> 
                    <Col md="3">
                    </Col>

                </Row>
                </Col>
                    
                    <Col md="12" className="fs-5 mb-5 mt-2 desc1" > {props.desc}</Col>        
                
            </Row>
            :
                <Col md="3">
                <Row>
                <Col md="12">
                  <img  src={props.img} alt="none" style={{width:"100%"}}/>            
                </Col>
                <Col md="12" className={"mt-3 mb-3 fw-bold " + props.type}>{props.heading}</Col>
                <Col md="12" className="fs-5 mb-5 desc1" > {props.desc}</Col>        
                </Row>
                </Col>
            }
        </React.Fragment>
    )
}

export default AboutData;