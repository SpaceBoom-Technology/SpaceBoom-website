import AmongUs from './../Services/Elem/amongUs.jpg';
import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

class BlogPage extends React.Component {

    state = {
        title: "",
        author: "",
        time: "",
        body: "",
    }

    componentDidMount() {
        axios.get("/blog/info/" + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    time: res.data.timeStamp,
                    body: res.data.body
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const title = this.state.title, author = this.state.author;
        const time = this.state.time.split('T')[0];
        return (
            <React.Fragment>
                <Container>
                    <Row className="mt-5 mb-5">
                        <Col md="12" className="fs-1 fw-bold text-center mb-5">
                            {title}
                        </Col>
                        <Col md="3"></Col>
                        <Col md="6">
                            <Card className="">
                                <CardBody>
                                    <Row className="text-center">
                                        <Col md="1" className="mb-md-0 mb-4">
                                            <img src={AmongUs} className="profile_Img" />
                                        </Col>
                                        <Col md="4" xs="6">
                                            <Row>
                                                <Col md="12" className="fw-light fs-5">Written By</Col>
                                                <Col md="12" className="fw-bold fs-5">{author}</Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Col className="fw-light fs-5">Published On</Col>
                                            <Col className="fw-bold fs-5">{time}</Col>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                    <Row>
                        {ReactHtmlParser(this.state.body)}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default BlogPage;