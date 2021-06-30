import React from 'react';
import '../Home/Home.css';
import { Col, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
const Author = (props) => {

    console.log(props);
  return (
      <>
      <Col xs="12" md="4">
          <Card className="ThumbnailCard shadow p-3 mb-5 bg-white rounded "  >
            <CardImg src={props.img}/>
                <CardTitle className="cardtitle">
                    {props.name}
                </CardTitle>   
            
                <CardBody >
                    <div className="carddesc">
                    {props.desc}
                    </div>
                </CardBody>
          </Card>
      </Col>
      </>
    
  )
  }
export default Author;