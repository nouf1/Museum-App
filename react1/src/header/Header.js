import React from 'react'
import { Link } from 'react-router-dom'
// import Contact from './contact'
import './Header.scss'
// import './App.css';


const authenticatedOptions = (
  
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <div className="navbar">
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
    </div>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
     <div className="navbar">
    <Link to="/entro">Home</Link>
    <Link to="/museumList">Explor</Link>
    <Link to="/contact">About Us</Link>
    </div>
  </React.Fragment>
)


const Header = ({ user }) => (
  <header className="main-header">
    <nav>
      { user && <span>Welcome {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
