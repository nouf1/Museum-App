import React, { Component } from "react";

class Booking extends Component {
    render() {
        let allmuseum;
        {console.log(this.props.Booking.length)}
        if( this.props.Booking.length>0 )
        {console.log(this.props.Booking)
            allmuseum=this.props.Booking.map((museum,index)=>{
    
                return (
                    <div className="details">
                    <h3>{this.props.museum.name}</h3>
                    <img src={this.props.museum.img} alt="image of the museum"></img>
                    <p>{this.props.museum.description}</p>
                    <p>{this.props.museum.workTime}</p>
                    <p>{this.props.museum.location}</p>  
               {/* <button onClick={()=>this.props.HandleClear(booking)}> Cancel My Booking </button> */}
               </div>

                )
   })} 

   return (
        
         <div>
         {allmuseum}
         </div>
);
}
}

export default Booking;