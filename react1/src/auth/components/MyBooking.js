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
                    <h1>{this.props.museumList.find(museum => {
                        return museum._id === booking.museum;
                    }).name}</h1>
                    <img src = {this.props.museumList.find(museum => {
                        return museum._id === booking.museum;
                    }).img} />
                    <div className="details">
                        <h3>{booking.fullname}</h3>
                        <p>{booking.phone_number}</p>
                        <p>{booking.date}</p>
                        <p>{booking.num_guest}</p>
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


