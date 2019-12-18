import React from "react";


const MyBooking = (props) => {
    let allitem;
    if (props.museum.length == 0){
        allitem = <h2>No Reservations..</h2>
    }else{
        allitem = props.museum.map((museum,index)=>{
            return <div key={index}>
                <img src={museum.img} alt="img of a museum"></img>
                <div className="details">
                <h3>{museum.name}</h3>
                <p>{museum.description}</p>
                <p>{museum.workTime}</p>
                <p>{museum.location}</p>
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

export default MyBooking
  