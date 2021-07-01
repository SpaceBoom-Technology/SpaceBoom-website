import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import BlogCard from './Elem/BlogCard';

class ShowBlog extends React.Component {

    state = {
        author: [],
        title: [],
        time: [],
        id: [],
    }

    componentDidMount() {
        axios.get('/blog/info')
            .then(res => {
                let tempAuthor = [], tempTitle = [], tempTime = [], tempId = [];
                for (let i = 0; i < res.data.length; i++) {
                    tempAuthor.push(res.data[i].author);
                    tempTitle.push(res.data[i].title);
                    tempTime.push(res.data[i].timeStamp);
                    tempId.push(res.data[i]._id);
                }
                console.log(res.data)
                this.setState({ author: tempAuthor, title: tempTitle, time: tempTime, id: tempId })
            })
    }
    render() {
        const showBlogs = this.state.author.map((content, idx) => {
            return (
                <BlogCard title={this.state.title[idx]} author={content} time={this.state.time[idx]} id={this.state.id[idx]} />
            )
        })
        return (
            <React.Fragment>
                <Container>
                    <Row className="text-center">
                        <Col md="12" className="mt-5 fs-1 fw-bold">
                            SpaceBoom Blogs
                        </Col>
                        <Col className="mt-4 fs-4 fw-light mb-5">
                            Everything you need to know about creating, developing and launching your app
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        {showBlogs}
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default ShowBlog;