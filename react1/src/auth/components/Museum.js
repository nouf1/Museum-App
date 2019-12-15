import React from 'react'

class Museum extends React.Component {
    deleteMuseum = (e) => {
      e.preventDefault();
      this.props.deleteMuseum(this.props.id);
    }
    updateMuseum = (e) => {
        e.preventDefault();
        this.props.updateMuseum(this.props.id);
      }
    render() {
      return ( <div>
        <div className="details">
        <h3>{this.props.name}</h3>
        <img src={this.props.img} alt="image of the"></img>
        <p>{this.props.description}</p>
        <p>{this.props.workTime}</p>
        <p>{this.props.location}</p>
        </div>
        <button onClick={()=> this.deleteMuseum()} variant="outline-warning">Delete</button> 
        <button onClick={()=> this.updateMuseum()} variant="outline-warning">Up-Date</button> 
   
        </div>
      );
    }
  }
  
  export default Museum;