import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';

class AddBlog extends React.Component {

    state = {
        data: {
            title: "",
            author: "",
            body: "",
        }
    }

    inputHandler(value, field) {
        this.setState({
            data: { ...this.state.data, [field]: value }
        })
    }

    handleEditorChange = (content, editor) => {
        let { data } = this.state;
        data.body = content;
        this.setState({ data });
    };

    submitHandler = async (e) => {
        e.preventDefault();
        axios.post('/blog', this.state.data)
            .then(res => {
                console.log("this is response", res);
            })
            .catch(err => console.log("error", err))
    }

    render() {
        return (
            <React.Fragment>
                <Container className="mt-5">
                    <form onSubmit={this.submitHandler}>
                        <Row>
                            <Col>
                                <Input className="w-50 p-3 mb-5" placeholder="Title" onChange={(e) => this.inputHandler(e.target.value, "title")} />
                                <Input className="w-25 p-3 mb-5" placeholder="Author Name" onChange={(e) => this.inputHandler(e.target.value, "author")} />
                                <Editor
                                    initialValue=""
                                    init={{
                                        height: 500,
                                        menubar: 'file edit view insert format tools table help',
                                        toolbar_mode: 'sliding',
                                        image_caption: true,
                                        content_css: "/tailwind.min.css,/test.css",
                                        plugins: [
                                            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                                        ],
                                        toolbar:
                                            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
                                        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quicktable',
                                        quickbars_insert_toolbar: false,
                                        images_upload_url: '/blog/uploadImg',
                                        images_reuse_filename: true
                                    }}
                                    onEditorChange={this.handleEditorChange}
                                />
                                <Button className="SubmitBtn mt-5 mb-5">Post Blog</Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

export default AddBlog;