import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { show } from '../api';

class MuseumShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            museum: []
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

         const events = this.state.museum.events.map(event => {
            <li>{event.title}</li>
         })
        console.log("render", this.props);
        return (
            <div>
                <h1>{this.state.museum.name}</h1>
                <ul>
                    <img src={this.props.img} alt="image of the"></img> 
                    <p>{this.props.title}</p>
                    <p>{this.props.startDate}</p>
                    <p>{this.props.endDate}</p>
                </ul>
            </div>
        )
     }
}

export default withRouter( MuseumShow );