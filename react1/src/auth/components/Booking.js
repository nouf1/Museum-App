import React, { Component } from "react";
import { Form, Button, Container, Col } from 'react-bootstrap';

class Booking extends Component {
    state = {
        dataForm: {
            fullname: '',
            phone_number: '',
            date: '',
            num_guest: ''
        }
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.fullname;
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
        const newbook = this.state.dataForm

    }
    render()
     {
        // let allmuseum;
//         {console.log(this.props.Booking.length)}
//         if( this.props.booking.length>0 )
//         {console.log(this.props.Booking)
//             allmuseum=this.props.Booking.map((museum,index)=>{
    
//                 return (
//                     <div className="details">
//                     <h3>{this.props.museum.name}</h3>
//                     <img src={this.props.museum.img} alt="image of the museum"></img>
//                     <p>{this.props.museum.description}</p>
//                     <p>{this.props.museum.workTime}</p>
//                     <p>{this.props.museum.location}</p>  
//                {/* <button onClick={()=>this.props.HandleClear(booking)}> Cancel My Booking </button> */}
//                </div>
            
//                 )
//                 }
//    );
// } 


   console.log("render", this.props);
   return (
    <Container>
    <br/>
    <Form onSubmit={this.handleSubmit}>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.fullname} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" name="phone_number" value={this.state.dataForm.phone_number} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" name="date" value={this.state.dataForm.date} />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Number Of Guest</Form.Label>
                <Form.Control onChange={this.handleChange} type="text" name="num_guest" value={this.state.dataForm.num_guest} />
            </Form.Group>
        </Form.Row>
        <Button type="submit"> Submit </Button>
    </Form>
    <br/>
    <div>
         {/* {allmuseum} */}
         </div>
</Container >
 );
}
}
export default Booking;  