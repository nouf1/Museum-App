import React, { Component } from 'react';
import { museumUpdateByID , show} from '../api'
import { withRouter } from 'react-router-dom'
import { Form, Button, Container, Col } from 'react-bootstrap'

class MuseumUpdate extends Component {
    state = {
       
            name: '',
            img: '',
            description: '',
            workTime: '',
            location: '',
            events:''
        
    }
    componentDidMount() {
        const MuseumId = this.props.match.params.id
        show(MuseumId)
            .then(res => {
                const museum = res.data.museum
                this.setState({
                    name: museum.name,
                    img: museum.img,
                    description: museum.description,
                    workTime: museum.workTime,
                    location: museum.location,
                    events:museum.events
                })
                console.log(res)
            })

            .catch((error) => console.log(error))

          
        
    }
    handleChange = (event) => {
       
        // console.log(this.state.dataForm);
        
        // const newForm = Object.assign(this.state.dataForm)
        // newForm[name] = value;
        this.setState({ [event.target.name]: event.target.value });
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.props.user
        const museumId = (this.props.match.params.id).split(":")[1] // using withRouter
        const updateMuseum = this.state
        
        museumUpdateByID(user, updateMuseum, museumId)
            .then((res) => {
            console.log(res);
            
            
            this.props.history.push(`/museums/${museumId}`)
            
    })
            .catch((error) => console.log(error))
    }
    render() {
        console.log(this.props.user)
        console.log("========");
        console.log(this.props) // using withRouter
        console.log("========");
         console.log({museum: this.state})
        return (
            <Container>
                <br />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>name</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>img</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="img" value={this.state.img} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>description</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>workTime</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="workTime" value={this.state.workTime} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group >
                        <Form.Label>location</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="location" value={this.state.location} as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>events</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="events" value={this.state.events} as="textarea" rows="2" />
                    </Form.Group>
                    <Button type="submit">Update</Button>
                </Form>
                <br />
            </Container >
        );
    }
}

export default withRouter( MuseumUpdate );