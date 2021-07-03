import React from 'react';
import { Row, Col,Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import "./developmentservices.css"
const DevelopmentData = (props) => {
    const isMobile = useSelector(state => state.isMobile)
    return (
        <React.Fragment>
            {props.type==="mainHead"?
            <Row className="mb-5">
                {props.alignment === 'left' && isMobile ?
                    <Col md="6">
                        <img className="w-100" src={props.img} alt="none"/>
                    </Col> : null
                }
                <Col>
                    <Row>
                    <div>
                        <hr style={{ border: "4px solid ",color:"rgb(0, 0, 0)", width: "80px", float: "left", marginBottom: "10px", marginTop: "40px" }}></hr>
                    </div>
                    <Col md="12" className={"mt-1 mb-5 fw-bold " + props.type}>{props.heading}</Col>
                    <Col md="12" className="fs-5 mb-5 desc" style={{fontSize:"38px"}} > {props.desc}</Col>
                    </Row>
                </Col>
                {props.alignment === 'right' || !isMobile ?
                    <Col md="6">
                        <img className="w-100" src={props.img} alt="none"/>
                    </Col> : null
                }
            </Row>
            :
            <Row className="mb-5">
                {props.alignment === 'left' && isMobile ?
                <>
                <Col md="5">
                    <img className="w-100" src={props.img} alt="none"/>
                </Col>
                <Col md="2">
                    {props.type==="data1"?null: 
                    <div style={{backgroundColor:"#fdbe01", borderRadius:"50%",height:"80px",width:"80px",marginLeft:"50px",marginTop:"120px"}}>
                        <div style={{fontWeight:"600",fontSize:"34px",paddingTop:"9px",paddingInlineStart:"40%"}}>
                        {props.id+1}
                        </div></div>
                    }
                </Col> 
                </>
                :
                <>
                {(props.alignment=="left"||props.alignment=="right")&&(!isMobile)?
                <Col xs="12">
                    <img className="w-100" src={props.img} alt="none"/>
                </Col>
                :null
                }
                </>
                }
                <Col>
                    <Row >
                    <div>
                        <hr style={{ border: "4px solid ",color:"rgb(0, 0, 0)", width: "80px", float: "left", marginBottom: "10px", marginTop: "40px" }}></hr>
                    </div>
                    <Col md="12" className={"mt-1 mb-1 fw-bold " + props.type}>{props.heading}</Col>
                    <Col md="12"  className="mt-1 mb-1  " style={{fontSize:"26px"}}>{props.title}</Col>
                    <Col md="12" className="fs-5 mb-1 desc" > {props.desc}</Col>
                    {props.type==="bodydevelopment" && (props.id===1||props.id===2||props.id===3)?
                    <Col md="12" className="mt-1 mb-3 SubmitBtn" style={{maxWidth:"200px",marginLeft:"15px"}}>{props.btnData}</Col>
                    :null}
                   
                    </Row>
                </Col>
                {props.alignment === 'right' && isMobile ?
                <>
                <Col md="2">
                {props.type==="data1"?null:
                <div style={{backgroundColor:"#fdbe01", borderRadius:"50%",height:"80px",width:"80px",marginLeft:"50px",marginTop:"120px"}}>
                <div style={{fontWeight:"600",fontSize:"34px",paddingTop:"9px",paddingInlineStart:"39%"}}>
                    {props.id+1}
                    </div></div>
                    }
                </Col> 
                    
                <Col md="5">
                    <img className="w-100" src={props.img} alt="none"/>
                </Col>
                </> : 
                null
                }
            </Row>
            }
        </React.Fragment>
    )
}

export default DevelopmentData;