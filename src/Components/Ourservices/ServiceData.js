import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import "./ourservices.css"
const ServiceData = (props) => {
    const isMobile = useSelector(state => state.isMobile)
    console.log("myprops",props)
    return (
        <React.Fragment>
            {props.type=="mainHead"?
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
                    <Col md="12" className="fs-5 mb-5" > {props.desc}</Col>
                   
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
                    {props.type=="data1"?null: 
                    <div style={{backgroundColor:"#fdbe01", borderRadius:"50%",height:"18%",width:"40%",marginLeft:"50px",marginTop:"120px"}}>
                        <div style={{fontWeight:"600",fontSize:"32px",paddingTop:"14px",paddingInlineStart:"40%"}}>
                        {props.id+1}
                        </div></div>
                    }
                    </Col> 
                    </>:null
                }
                
                <Col>
                    <Row>
                    <div>
                        <hr style={{ border: "4px solid ",color:"rgb(0, 0, 0)", width: "80px", float: "left", marginBottom: "10px", marginTop: "40px" }}></hr>
                    </div>

                    <Col md="12" className={"mt-1 mb-3 fw-bold " + props.type}>{props.heading}</Col>
                    <Col md="12"  className="mt-1 mb-3  " style={{fontSize:"26px"}}>{props.title}</Col>
                    <Col md="12" className="fs-5 mb-5 desc" > {props.desc}</Col>
                   
                    </Row>
                </Col>
                {props.alignment === 'right' || !isMobile ?
                    <>
                     
                    <Col md="2">
                    {props.type=="data1"?null:
                    <div style={{backgroundColor:"#fdbe01", borderRadius:"50%",height:"18%",width:"40%",marginLeft:"50px",marginTop:"120px"}}>
                        <div style={{fontWeight:"600",fontSize:"32px",paddingTop:"14px",paddingInlineStart:"40%"}}>
                        {props.id+1}
                        </div></div>
                        }
                    </Col> 
                    
                    <Col md="5">
                        <img className="w-100" src={props.img} alt="none"/>
                    </Col>
                    </> : null
                }
            </Row>
            }
        </React.Fragment>
    )
}

export default ServiceData;