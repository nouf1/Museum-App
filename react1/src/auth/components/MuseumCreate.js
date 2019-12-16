import React, { Component } from 'react';
import { create } from '../api'
import { withRouter } from 'react-router-dom'
import { Form, Button, Container, Col } from 'react-bootstrap'

class MuseumCreate extends Component {
    state = {
        dataForm: {
            name: '',
            img: '',
            description: '',
            workTime: '',
            location: '',
            events:'',
           
        }
    }
    
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        // newForm["owner"] = this.props.user._id
        this.setState({
            dataForm: newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.props.user
        const newMuseum = this.state.dataForm

        create(user,newMuseum)
            .then(this.setState({
                dataForm: {
                    name: '',
                    img: '',
                    description: '',
                    workTime: '',
                    location: '',
                    events:''
                }
            })).then(() =>  this.props.history.push(`/museums/`))
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <Container>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>name</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.name} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>img</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="img" value={this.state.dataForm.img} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>description</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>workTime</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="workTime" value={this.state.dataForm.workTime} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group >
                        <Form.Label>location</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="location" value={this.state.dataForm.location} as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>events</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="events" value={this.state.dataForm.events} as="textarea" rows="2" />
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
                <br />
            </Container >
        );
    }
}

export default withRouter( MuseumCreate );