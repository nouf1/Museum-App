import React, { Component } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { show } from '../api';
import Event from './Event';
import Booking from './Booking'
import '../components/StyleMuseum.css'

class MuseumShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            museum: {},
            event:[],
            book: false
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
    booking(){
        console.log(this.state.book)
        this.setState({book: true}, ()=>{
            this.setState({book:false})
        })
        // this.props.history.push({
        //     pathname:`/booking/${this.props.match.params.id}`,
        //     state:{
        //         key:"value"
        //      }
        //    });
    }
    render() {
         
        const museum = this.props.museumList.find( m => m._id === this.props.match.params.id);
        // console.log(museum.events)
        const event = museum.events.map(event =>{
         return <Event title= {event.title}
                           startDate={event.startDate}
                           endDate={event.endDate}
                           img={event.img}
                            key={event._id} />
        })
    
        const museumShow = museum && <React.Fragment>                  
        <h3 className='one'>{museum.name}</h3>
        <img src={museum.img} className='one' alt="image of the"></img> 
        <p className='one'>{museum.description} </p>
        <p className='one'>{museum.workTime}</p>
        <p className='one'>{museum.location}</p>
        <Link to={`/booking/${museum._id}`} className='one'>Book</Link>
        </React.Fragment>
        // const events = museum && museum.events.map(event => {
        //    return <li>{event.title}</li>
        //  })
        console.log("render", this.props);
        return (
            <div>
                 <div className="col-4">
            {museumShow}
            </div>
            {/* {this.state.book && <Redirect to = {{
                pathname: '/booking/'+ museum._id,
                state: {id: "this.props.match.params.id"}
            }}/>} */}
            {/* <Link to= "/Booking/">  here </Link>     */}
            {/* <button onClick={()=>this.booking()}>Book</button> */}
               <br/>
               
                <ul>
                
                    {event}
                    
                </ul>
                
            </div>
        )
     }
}

export default withRouter( MuseumShow );