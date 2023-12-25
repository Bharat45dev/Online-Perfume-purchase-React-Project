import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Product from './Component/Product.jsx'
import ContactUs from './Component/ContactUs.jsx'
import Footer from './Component/Footer.jsx'


function App() {
  return (
   <>

   {/* Navbar link using route becouse of link redirecting fast */}
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
   
   </>
  );
}

export default App;
