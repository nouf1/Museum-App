import React from "react";
import { getBooking } from "../api";


export default class MyBooking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookings: []
        }
    }
    componentDidMount() {
        getBooking(this.props.user._id).then(res => {
            this.setState({ bookings: [...res.data] })
        }
        )
    }
    render() {
        console.log(this.props.museumList);
        let allitem;
        if (this.state.bookings.length == 0) {
            allitem = <h2>No Reservations..</h2>
        } else {
            allitem = this.state.bookings.map((booking, index) => {
                return <div key={index}>
                    <div className="card">
                    <h1>{this.props.museumList.find(museum => {
                        return museum._id === booking.museum;
                    }).name}</h1>
                    <div class="embed-responsive embed-responsive-16by9">
                    <img className="card-img-top" src = {this.props.museumList.find(museum => {
                        return museum._id === booking.museum;
                    }).img} width="300px" height="300px" />
                    </div>
                    </div>
                    <div className="card-body">
                    <div className="details">
                        <h3 className="card-text">{booking.fullname}</h3>
                        <p className="card-text">{booking.phone_number}</p>
                        <p className="card-text">{booking.date}</p>
                        <p className="card-text">{booking.num_guest}</p>
                        </div>
                        </div>
                    </div>
             
            })
        }
        return (
            <div className="cart">
                {allitem}
            </div>
        )
    }
}


