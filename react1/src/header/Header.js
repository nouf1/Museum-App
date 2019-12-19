import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './black.png'
// import Contact from './contact'
import './Header.scss'
// import './App.css';


const authenticatedOptions = (
  
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to="/MyBooking">My Booking</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    {/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary"></nav> */}
    {/* <div className="navbars"> */}
    {/* <nav class="p-3 mb-2 bg-warning text-dark"> */}
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    {/* </nav> */}
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
     {/* <div className="navbar"> */}
    {/* <Link to="/entro">Home</Link> */}
    {/* <Link to="/museumList">Explor</Link> */}
    {/* <Link to="/contact">About Us</Link> */}
    {/* </div> */}
  </React.Fragment>
)

{/* <div id="navbar">
  <a href="#default" id="logo">CompanyLogo</a>
  <div id="navbar-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div> */}

const Header = ({ user }) => (
  <header className="main-header">
    <div id="logo">
</div>
{/* <nav class="p-3 mb-2 bg-warning text-dark"> */}
<Link to="/entro">Home</Link>
<Link to="/museumList">Explor</Link>
    <Link to="/contact">About Us</Link>
{/* </nav> */}
{/* <Link className="btn" to={"/museumList"}>
        <button>
          <h3>- EXPLOR -</h3>
        </button>
      </Link> */}
   
    <nav>
      { user && <span>Welcome {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
