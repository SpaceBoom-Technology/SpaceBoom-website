import './ProjectForm.css'
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Input, Button, Label } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';
import formdata from 'form-data';
class ProjectForm extends React.Component {

    inputHandler(value, field) {
        this.setState({
            data: { ...this.state.data, [field]: value }
        })
    }
    state = {
        fileName: '',
        data: {
            name: "",
            phonenumber: "",
            companyname: "",
            country:"",
            document:"",
            email:"",
            description:"",
            projecttype:""
        }
    }
    uploadVariable = React.createRef(null);
    
    inputHandler(value, field) {
        if(value===undefined)
        {
            this.setState({
                data: { ...this.state.data, ['projecttype']: value }
            })
        }
        else{
        this.setState({
            data: { ...this.state.data, [field]: value }
        })
    }
    }
    uploadLabelHandler = (event) => {
        if (event.target.type === "file")
             this.setState({ data: { ...this.state.data, ['document']: event.target.files[0] } })
        this.setState({
            fileName: event.target.files[0].name
        })
        console.log("this is event name", event.target.files[0].name)
    }
    
    submitHandler = async (e) => {
        e.preventDefault();
        let formData = new formdata();
        formData.append("data", JSON.stringify(this.state.data))
        formData.append("document", this.state.data.document)
        console.log("formdata",this.state.data)
        await axios.post('/contact', formData)
            .then(res => {
                console.log("this is response", res);
            })
            .catch(err => console.log("error", err))
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

                    <form onSubmit={this.submitHandler}>                    
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
                                            <Input className="p-3" id="name" placeholder="Your Name *" onChange={(e) => this.inputHandler(e.target.value, "name")}/>
                                        </Col>
                                        <Col className="mb-5">
                                            <Input className="p-3" id="email" placeholder="E-Mail *" onChange={(e) => this.inputHandler(e.target.value, "email")}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" md="6" className="mb-5">
                                            <Input className="p-3" id="phonenumber" placeholder="Phone Number *" onChange={(e) => this.inputHandler(e.target.value, "phonenumber")} />
                                        </Col>
                                        <Col className="mb-5">
                                            <Input className="p-3" id="country" placeholder="Country *" onChange={(e) => this.inputHandler(e.target.value, "country")}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" md="6" id="companyname" className="mb-5">
                                            <Input className="p-3" placeholder="Company Name *" onChange={(e) => this.inputHandler(e.target.value, "companyname")} />
                                        </Col>
                                        <Col className="mb-5">
                                            <Select styles={customStyles} type="select" id="projecttype" isMulti options={projectOptions} placeholder="Type of Project" onChange={(e) => this.inputHandler(e.target, "projecttype")}/>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Input className="p-4 mt-5 mb-5 use-shadow" id="description" type="textarea" placeholder="Project description" onChange={(e) => this.inputHandler(e.target.value, "description")}/>
                        </Col>
                        <Col className="mb-5">
                            <Label for="fileUpload" className="SubmitBtn file labelUpload">
                                <i className="p-2 fas fa-file-upload"></i>
                                Attach Documentation
                            </Label>
                            <Input ref={this.uploadVariable} onChange={(e)=>{ this.uploadLabelHandler(e)}}  id="fileUpload" type="file" hidden />
                            <Col>{this.state.fileName}</Col>
                        </Col>
                        <Col className="mb-5 SubmitBtnCol">
                            <Button className="SubmitBtn">Go, Send it now</Button>
                        </Col>
                    </Row>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

export default ProjectForm;