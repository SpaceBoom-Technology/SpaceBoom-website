import './ProjectForm.css'
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Input, Button, Label } from 'reactstrap';
import Select from 'react-select';

class ProjectForm extends React.Component {
    state = {
        fileName: '',
    }
    uploadVariable = React.createRef(null);

    uploadLabelHandler = (event) => {
        this.setState({
            fileName: event.target.files[0].name
        })
        console.log("this is event name", event.target.files[0].name)
    }
    render() {
        const customStyles = {
            control: base => ({
                ...base,
                height: 58,
                minHeight: 35
            })
        };
        const projectOptions = [
            { value: 'ProjectDocumentation', label: 'Strategy & Project Documentation' },
            { value: 'Wireframes', label: 'Wireframes' },
            { value: 'UI_UX', label: 'Branding & UI/UX Design' },
            { value: 'iosDev', label: 'IOS Development' },
            { value: 'androidDev', label: 'Android Development' },
            { value: 'webDev', label: 'Web Development' }
        ]
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md="12" className="title text-center mb-5 mt-3 fs-4">Ready to discuss your project?</Col>
                        <Col>
                            <Card className="use-shadow">
                                <CardHeader className="text-center p-4 fs-4 form-header">
                                    Enter your details
                                </CardHeader>
                                <CardBody className="p-5">
                                    <Row>
                                        <Col xs="12" md="6" className="mb-5">
                                            <Input className="p-3" placeholder="Your Name *" />
                                        </Col>
                                        <Col className="mb-5">
                                            <Input className="p-3" placeholder="E-Mail *" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" md="6" className="mb-5">
                                            <Input className="p-3" placeholder="Phone Number *" />
                                        </Col>
                                        <Col className="mb-5">
                                            <Input className="p-3" placeholder="Country *" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" md="6" className="mb-5">
                                            <Input className="p-3" placeholder="Company Name *" />
                                        </Col>
                                        <Col className="mb-5">
                                            <Select styles={customStyles} isMulti options={projectOptions} placeholder="Type of Project" />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Input className="p-4 mt-5 mb-5 use-shadow" type="textarea" placeholder="Project description" />
                        </Col>
                        <Col className="mb-5">
                            <Label for="fileUpload" className="SubmitBtn file labelUpload">
                                <i className="p-2 fas fa-file-upload"></i>
                                Attach Documentation
                            </Label>
                            <Input ref={this.uploadVariable} onChange={(e) => this.uploadLabelHandler(e)} id="fileUpload" type="file" hidden />
                            <Col>{this.state.fileName}</Col>
                        </Col>
                        <Col className="mb-5 SubmitBtnCol">
                            <Button className="SubmitBtn">Go, Send it now</Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default ProjectForm;