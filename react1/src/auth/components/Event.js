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
            return ( <div>
               <li>{this.props.title}</li>
                    <li>{this.props.startDate}</li>
                    <li>{this.props.endDate}</li>
                    <img src={this.props.img} alt="image of the"></img> 
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