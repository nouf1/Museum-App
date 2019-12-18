import React from 'react';
import { getAllMuseumList, deleteMuseumByID, museumUpdateByID, museumCreate, create} from '../api';
import Museum from './Museum';
// import Entro from './entro'

class MuseumList extends React.Component {
  componentDidMount() {
    getAllMuseumList()
      .then((response) => {
         
        this.props.setMuseumList(response.data.museums);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    deleteMuseum = (id) => {
        deleteMuseumByID(id)
      .then((response) => {
        const newMuseumList = this.props.museumList.filter((museum) => {
          return museum._id !== id;
        });

        this.props.setMuseumList(newMuseumList);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    
  museumUpdate = (id) => { 
    museumUpdateByID(id)
    .then((response) => {
        console.log("hello")
        this.setState({ MuseumList: response.data})
    })
    .catch((error) => {
        console.log(error);
      });
}

museumCreate = (user, newMuseum) => { 
    create(user,newMuseum)
    .then((response) => {
        console.log("hello")
        this.setState({ MuseumList: response.data})
    })
    .catch((error) => {
        console.log(error);
      });
}

  render() {
      console.log(this.props.museumList);
      
    let allMuseumList = <h2>No Museums</h2>;

    if (this.props.museumList.length > 0) {
        allMuseumList = this.props.museumList.map((museum, index) => {
        return <Museum name={museum.name}
                        img={museum.img}
                        description={museum.description}
                        id={museum._id}
                        deleteMuseum={this.deleteMuseum}
                        museumUpdate={this.museumUpdate}
                        museumCreate={this.museumCreate}
                        event = {museum.event}
                        key={museum._id} />;
       
      });
    }

    return allMuseumList;
  }
}

export default MuseumList;