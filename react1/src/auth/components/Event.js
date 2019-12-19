import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { showEvent } from '../api'
import MuseumShow from './MuseumShow'

class Event extends Component {
    constructor(props) {
        super(props)

        this.state = {
            museum: {},
            event:[]
        }
    }
    componentDidMount(){
        console.log("=====================");
        // showEvent(this.props.match.params.id)
        // .then((res) => {
        //     console.log(res.data);
        //     this.setState({
        //         events: res.data.events
        //     })
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

    render() {
        // const e = this.props.museumList._id.events
        // const events = e && e.events.map(event => {
            return ( 
            <div>
                <div className="card">
            <img className="card-img-top" src={this.props.img} width="500px" height="395px" alt="image of the"/>
            <div className="card-body">
            <li className="card-title">{this.props.title}</li>
            <li className="list-group-item">{this.props.startDate}</li>
            <li className="list-group-item">{this.props.endDate}</li>
                    </div>
                    </div>
                    </div>)
        //   }
        //   )

        //  console.log("render", this.props);
        // return (
        //     <div>
        //        {events} 
        //     </div>
        // );
    }
}
export default Event;
