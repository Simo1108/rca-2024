import React, { useEffect, useState } from "react";
import SideListComponent from "../components/SideListComponent";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);

    const fetchDataCategories = () =>
    fetch(`http://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then((response) => response.json())
    .then((responseJson) => setCategories(responseJson));
    
    const fetchDataAreas = () =>
        fetch (`http://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then((response) => response.json())
    .then((responseJson) => setAreas(responseJson));
    useEffect(() => {
        fetchDataCategories();
        fetchDataAreas();
    }, []);

    return (
        <div className="sidebar-container">
        <div className="row">  
    <Link 
    to="/favorites"
    className="btn bg-warning-subtle text-start  text-dark fw-bold ">
      
      ♡ Favorites

    </Link>
 
 <div className="sidebar-container">
        <div className="row">
            <div className="bg-white col-auto col-md-3 min-vh-100">
                <h2 className="text-decoration-none text-dark d-flex align-items-center">
                    <i className="fs-4 bi bi-speedometer"></i>
                    <p className="ms-1 fs-4">
                    Categories</p>
                </h2>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item text-black fs-4">
                    </li>
                </ul>
                <div className="sidebar-container">
    <SideListComponent data={categories} field={"strCategory"} />
    </div>
</div>
</div>
<div className="sidebar-container">
        <div className="row">
            <div className="bg-white col-auto col-md-3 min-vh-100">
                <h2 className="text-decoration-none text-dark d-flex align-items-center">
                    <i className="fs-4 bi bi-speedometer"></i>
                    <p className="ms-1 fs-4 ">
                    Areas 
                    </p>
                </h2>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item text-black fs-4">
                    </li>
                </ul>
                <div className="sidebar-container">
    <SideListComponent data={areas} field={"strAreas"} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>

 );
}; 
export default Sidebar;



