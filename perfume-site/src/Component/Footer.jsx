import React from 'react'
import {  Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
  
  <footer className="footer-distributed">

<div className="footer-right">

  <a href="#"><i className="fa fa-facebook"></i></a>
  <a href="#"><i className="fa fa-twitter"></i></a>
  <a href="#"><i className="fa fa-linkedin"></i></a>
  <a href="#"><i className="fa fa-github"></i></a>

</div>

<div className="footer-left">

  <p className="footer-links">
    <Link to='/' className="link-1" href="#">Home</Link>
    <Link to='/about' >About</Link>
    <Link  to='/product'>Product</Link>
   <Link to='/contact' >Contact Us</Link>

   
   
  </p>

  <p>Company Name &copy; 2023</p>
</div>

</footer>

    </div>
  )
}

export default Footer