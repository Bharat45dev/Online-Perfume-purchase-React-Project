import React from 'react';
import product from '../Img/product.jpg';


import {  Link } from "react-router-dom";

const Product = () => {
  //  Dummy product data array
  const products = [
    {
      id: 1,
      title: 'Instant Elegance',
      imageUrl: product,
      rating: 4,
      reviews: 123,
      price: '$ 128',
    },
    {
      id: 2,
      title: 'The Scent Lab',
      imageUrl: product,
      rating: 4,
      reviews: 123,
      price: '$ 140',
    },
    {
      id: 3,
      title: 'Aromatic Bliss',
      imageUrl: product,
      rating: 4,
      reviews: 123,
      price: '$ 135',
    },
    {
      id: 4,
      title: 'Pure Provocation',
      imageUrl: product,
      rating: 4,
      reviews: 123,
      price: '$ 180',
    },
    {
      id: 5,
      title: 'Wildflower Blush',
      imageUrl: product,
      rating: 4,
      reviews: 123,
      price: '$ 200',
    },
    {
      id: 6,
      title: 'Sunset Breeze',
      imageUrl:product,
      rating: 4,
      reviews: 123,
      price: '$ 190',
    },
  ];

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {/* using map method to show dynamic product and use slice method to show first the  product  */}
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="col-md-4">
            <div className="container m-4">
  <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
    <img src={product.imageUrl} className="card-img-top rounded-0" alt="..."/>
    <div className="card-body mt-3 mb-3">
      <div className="row">
        <div className="col-10">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text d-flex gap-1">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            
             {product.rating}
          </p>
        </div>
        <div className="col-2">
          <i className="bi bi-bookmark-plus fs-2"></i>
        </div>
      </div>
    </div>
    <div className="row align-items-center text-center g-0">
      <div className="col-4">
        <h5>{product.price}</h5>
      </div>
      <div className="col-8">
      <Link to='/'  className="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</Link>
      </div>
    </div>
  </div>
</div>


            </div>
          ))}
        </div>
        <div className="row">
       {/* using map method to show dynamic product and  use slice method to show second 3 product */}

          {products.slice(3, 6).map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="container m-4">
  <div className="card border-0 rounded-0 shadow" style={{width: "18rem"}}>
    <img src={product.imageUrl} className="card-img-top rounded-0" alt="..."/>
    <div className="card-body mt-3 mb-3">
      <div className="row">
        <div className="col-10">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text d-flex gap-1">
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
           {product.rating}
          </p>
        </div>
        <div className="col-2">
          <i className="bi bi-bookmark-plus fs-2"></i>
        </div>
      </div>
    </div>
    <div className="row align-items-center text-center g-0">
      <div className="col-4">
      <h5>{product.price}</h5>
      </div>
      <div className="col-8">
        <Link to='/'  className="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</Link>
      </div>
    </div>
  </div>
</div>


            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Product;
