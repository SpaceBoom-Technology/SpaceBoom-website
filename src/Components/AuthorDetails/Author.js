import React from 'react';
import '../Home/Home.css';
import { Col, Card, CardImg, CardTitle, CardBody } from 'reactstrap';
const Author = (props) => {
    return (
        <>
            <Col xs="12" md="4">
                <Card className="ThumbnailCard" >
                    <CardImg src={props.img} alt="none" />
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