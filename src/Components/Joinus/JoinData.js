import './JoinData.css';
import React from 'react';
import { Row, Col,Card,CardBody,CardImg,CardTitle } from 'reactstrap';


const JoinData = (props) => {
    
    return (
        <React.Fragment>
        
        <Col xs="12" md="4">
          <Card className="ThumbnailCard shadow p-3 mb-5 bg-white rounded "   >
            <CardImg src={props.img}/>
                <CardTitle className="cardtitle" style={{marginTop:"20px",fontSize:"20px",fontWeight:"bold"}}>
                    {props.name}
                </CardTitle>   
                <CardBody >
                    <div className="carddesc1">
                    {props.desc}
                    </div>
                </CardBody>
          </Card>
        </Col>
        
      
        </React.Fragment>
    )
}

export default JoinData;