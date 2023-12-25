import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../Img/logo.jpg';
const Navbar = () => {
  // for mobile view toggle button open close 
  const [isopen, setIsopen] = useState(false);

  const handleToggle = () => {
    setIsopen(!isopen);
  };
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to='/' className="navbar-brand" href="#"> <img src={logo} style={{width:"60px"}} alt="" /> </Link>
    <button className="navbar-toggler"  onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* conditional base open close in mobile view  */}
    <div  className={`collapse navbar-collapse ${isopen ? 'show' : ''}`} id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap">
        <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
          
        </li>
     
        <li className="nav-item">
        <Link className="nav-link"  to="/product">Product</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link" to="/contact">ContactUs</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet />

   </>
  )
}

export default Navbar