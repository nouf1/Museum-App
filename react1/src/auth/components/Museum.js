import React from "react";
import { Link } from "react-router-dom";
import './StyleMuseum.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

class Museum extends React.Component {
  deleteMuseum = e => {
    e.preventDefault();
    this.props.deleteMuseum(this.props.id);
  };
  museumUpdate = e => {
    e.preventDefault();
    console.log("hi", this.props.id);
    this.props.museumUpdate(this.props.id);
  };
  museumCreate = e => {
    e.preventDefault();
    this.props.museumCreate(this.state.dataForm);
  };
  render() {
    return (
      <div>
        <div className="card">
          <div class="embed-responsive embed-responsive-16by9">
          <img
            className="card-img-top"
            src={this.props.img}
            alt="image of the"
          />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <Link to={"/museumShow/" + this.props.id}>
                <h3>{this.props.name}</h3>
              </Link>
            </h5>
            <p className="card-text">{this.props.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{this.props.workTime}</li>
            <li className="list-group-item">{this.props.location}</li>
          </ul>
          <div className="card-body">
          {/* <button type="button" class="btn btn-outline-warning" onClick={e => this.museumUpdate(e)} variant="outline-warning">
              Update
            </button> */}
            
            <Link className="card-link" to={"/museumUpdate/:" + this.props.id}>
              UpDate
            </Link>
            
            {/* <button type="button" class="btn btn-outline-warning" onClick={e => this.museumCreate(e)} variant="outline-warning">
              New
            </button> */}

            <Link className="card-link" to="/museumCreate/">
              New
            </Link>

            <button type="button" class="btn btn-outline-warning" onClick={e => this.deleteMuseum(e)} variant="outline-warning">
              Delete
            </button>
          </div>
        </div>
        {/* <button onClick={(e)=> this.museumUpdate(e)} variant="outline-warning">UppppDate</button> */}
        {/* <button type="button" class="btn btn-outline-warning" onClick={(e)=> this.museumCreate(e)} variant="outline-warning">Create</button>  */}
        {/* This will be removed if not working */}
      </div>
    );
  }
}

export default Museum;
