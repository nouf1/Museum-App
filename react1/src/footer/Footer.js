import React from "react";
import "./Footer.css";
const Header = ({ user }) => (
  <footer className="footer">
    {/* <small className="text-secondary"> */}
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br /> Built with<span className="text-danger">&hearts;</span>
      <span className="text-success">By TechWomen</span>
    {/* </small> */}
  </footer>
);
export default Header;