import React from 'react'
import {Link} from "react-router-dom"
class Museum extends React.Component {
    deleteMuseum = (e) => {
      e.preventDefault();
      this.props.deleteMuseum(this.props.id);
    }
    museumUpdate = (e) => {
        e.preventDefault();
        console.log("hi",this.props.id)
        this.props.museumUpdate(this.props.id);
      }
      museumCreate = (e) => {
        e.preventDefault();
        this.props.museumCreate(this.state.dataForm);
      }
    render() {
      return (
        
      <div>
          {console.log(this.props.event) }
        <div className="details">
        <Link to={'/museumShow/' + this.props.id }>
            <h3>{this.props.name}</h3>
        </Link>
        <img src={this.props.img} alt="image of the"></img> 
        <p>{this.props.description}</p>
        <p>{this.props.workTime}</p>
        <p>{this.props.location}</p>
        </div>
        <button onClick={(e)=> this.deleteMuseum(e)} variant="outline-warning">Delete</button> 
        <Link to={'/museumUpdate/:'+ this.props.id} >UpDate</Link>{" "}
       
        {/* <button onClick={(e)=> this.museumUpdate(e)} variant="outline-warning">UppppDate</button>  */}
        <Link to='/museumCreate/' >New</Link>
        {/* <button onClick={(e)=> this.museumCreate(e)} variant="outline-warning">Create</button>  */}

        {/* This will be removed if not working */}
        </div>
      );
    }
  }
  
  export default Museum;