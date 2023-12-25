import React, { useState } from 'react';
import Slide1 from '../Img/slide1.jpg';
import Slide2 from '../Img/slide2.jpg';
import Slide3 from '../Img/slide3.jpg';
import About from '../Component/About.jsx'
import Product from '../Component/Product.jsx'


const Home = () => {

  // for slider to next- previous button
  const slides = [Slide2, Slide1, Slide3];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* using map method to show slider images */}
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === current ? 'active' : ''}`}>
              <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={next}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About/>
      <Product/>

    </>
  );
};

export default Home;
