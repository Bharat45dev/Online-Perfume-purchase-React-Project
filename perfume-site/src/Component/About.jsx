import React from 'react';
import sideImg from '../Img/logo.jpg';
import {  Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-100 shadow" src={sideImg} alt="Company Logo" />
          </div>
          <div className="col-lg-6">
            <div className="p-5 mt-4">
              <h1 className="display-6"><b>ABOUT THE COMPANY</b></h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              </p>
              <Link to='/product' className="btn btn-outline-dark">
                Read More
              </Link >
            </div>
          </div>
        </div>
      </div>
    
    </div>
  
  );
};

export default About;
