import './BlogCard.css';
import React from 'react';
import { Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

const BlogCard = (props) => {
    return (
        <React.Fragment>
            <Col md="4">
                    <Card className="shadow">
                        <CardHeader style={{ height: "100px" }} className="fs-3 blogCardHeader text-center fw-bold">
                            {props.title}
                        </CardHeader>
                        <CardBody className="p-3">
                            <Col md="12" className="mt-5 mb-5 fs-5">
                                {"Author: " + props.author}
                            </Col>
                            <Col className="mb-5">
                                {"Posted on: " + props.time.replace(/T/, ' ').replace(/\..+/, '')}
                            </Col>
                            <Col className="text-end">
                            <Button href={"/blog/" + props.id + "/"} className="SubmitBtn">Check out this blog</Button>
                            </Col>
                        </CardBody>
                    </Card>
            </Col>
        </React.Fragment>
    )
}

export default BlogCard;