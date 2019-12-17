import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { show } from '../api';

class MuseumShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            museum: {},
            event:[]
        }
    }
    componentDidMount(){
        console.log("=====================");
        show(this.props.match.params.id)
        .then((res) => {
            console.log(res.data);
            this.setState({
                museum: res.data.museum
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    render() {
         
        const museum = this.props.museumList.find( m => m._id === this.props.match.params.id);
        const museumShow = museum && <React.Fragment>                  
        <h3>{museum.name}</h3>
        <img src={museum.img} alt="image of the"></img> 
        <p>{museum.description}</p>
        <p>{museum.workTime}</p>
        <p>{museum.location}</p>
        </React.Fragment>
        const events = museum && museum.events.map(event => {
           return <li>{event.title}</li>
         })
        console.log("render", this.props);
        return (
            <div>
            {museumShow}
            <Link to= '/Booking/'>  here </Link>    
               <br/>
                <ul>
                    {events}
                </ul>
            </div>
        )
     }
}

export default withRouter( MuseumShow );