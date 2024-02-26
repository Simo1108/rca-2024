import React from 'react'
import logo from "../assets/catering-quality-food-design-logo_187482-593.avif";

import { Link, useLocation } from "react-router-dom";


const Navbar = ({ searchValue, handleInputChange , value, isLoading}) => {
  const location = useLocation();
  
    return (
    //<div className="container-fluid">
      <div class="d-flex  p-2 sticky-top bg-light mb-4  align-items-center border-bottom ">
      <div className="navbar-brand" style={{ width: "250px", height: "60px" }}>
      <Link to="/">
            <img src={logo} className="img-fluid h-100" 
            alt="logo" 
              />
     
          </Link>
        </div>
        <div className="text-muted w-100">
        <form className="form form-control-group shadow-sm">
          <input type="text"
           className="form-control form-control-lg self-center border-bottom border-0 rounded-0" 
          placeholder="🔎 Find meals" 
          value={searchValue}
          onChange={handleInputChange}
          disabled={isLoading}>
          </input>
        </form>
        </div>
        </div>
    //</div>
    );
  };
  
  export default Navbar;