import React, { Component } from "react";
// import "./App.scss";
import { Route } from "react-router-dom";
import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Header from "./header/Header";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";
import Museum from "./auth/components/Museum";
import MuseumList from "./auth/components/MuseumList";
import MuseumUpdate from "./auth/components/MuseumUpdate";
import MuseumCreate from "./auth/components/MuseumCreate";
import MuseumShow from "./auth/components/MuseumShow";
import Booking from "./auth/components/Booking";
import Contact from './auth/components/about/Contact';
import Entro from "./entro/Entro";
import MyBooking from "./auth/components/MyBooking";
import { getAllMuseumList } from "./auth/api";
import Footer from "./footer/Footer";
// import footer from './footer/Footer'
// import 'bootswatch/dist/slate/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: [],
      museumList: []
    };
  }
  // setMuseum = (museum) => {
  //   this.setState({ museum: museum});
  // }
  componentDidMount() {
    getAllMuseumList()
      .then(response => {
        this.setMuseumList(response.data.museums);
      })
      .catch(error => {
        console.log(error);
      });
  }
  setMuseumList = museumList => {
    this.setState({ museumList: museumList });
  };

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  render() {
    const { alerts, user } = this.state;

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible
            key={index}
            variant={alert.type}
            message={alert.message}
          />
        ))}
        <main className="container-fluid">
          <Route
            path="/sign-up"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            path="/sign-in"
            render={() => <SignIn alert={this.alert} setUser={this.setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => (
              <SignOut
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword alert={this.alert} user={user} />}
          />
          {/* <Route exact path='/' render={() => (
            <Entro/>
          )}/> */}
          {/* <Route exact path='/' render={() => (
            <MuseumList  museumList={this.state.museumList} 
            setMuseumList={this.setMuseumList} />
          )} /> */}

          <Route
            path="/museumUpdate/:id"
            render={() => (
              <MuseumUpdate
                user={user}
                museumUpdate={this.state.museumUpdate}
                setMuseumUpdate={this.setMuseumUpdate}
              />
            )}
          />

          <Route
            path="/museumShow/:id"
            render={() => (
              <MuseumShow user={user} museumList={this.state.museumList} />
            )}
          />

          <Route
            exact
            path="/museumCreate"
            render={() => (
              <MuseumCreate
                user={user}
                museumCreate={this.state.museumCreate}
                setMuseumCreate={this.setMuseumCreate}
              />
            )}
          />
          <AuthenticatedRoute
            user={user}
            exact
            path="/myBooking"
            render={() => (
              <MyBooking user={user} museumList={this.state.museumList} />
            )}
          />

          <Route
            path="/booking/:id"
            render={(...props) => (
              <Booking user={user} {...props} museum={this.state.museum} />
            )}
          />

          <Route path="/contact" render={() => <Contact />} />

          <Route path="/entro" render={() => <Entro />} />

          <Route
            path="/museumList"
            render={() => (
              <MuseumList
                museumList={this.state.museumList}
                setMuseumList={this.setMuseumList}
              />
            )}
          />
        </main>
        <Footer  />
      </React.Fragment>
    );
  }
}
export default App;
