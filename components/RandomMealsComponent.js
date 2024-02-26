import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";


 const RandomMealsComponent = () => {
    const [meal, setMeal] = useState([]);

    const fetchData = () => 
        fetch(`http://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((responseJSON) => setMeal(responseJSON.meals[0]));
    
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Link to={`/meals/${meal.idMeal}`}
    className='card m-0 p-0'
    style={{ background: `url(${meal.strMealThumb}) center`,
    }}
    >
    <div
        className="h-100"
        style={{
          textDecoration: "none",
          color: "white",
        }}
        >
     <p className='card-title px-4 pt-2'>{meal.strCategory}</p>  
    <div className='mb-2 font-monospace px-4'>
    <p className="card-subtitle fw-semibold ">{meal.strMeal}</p>
    </div>
    </div>
    </Link>
  );
};
export default RandomMealsComponent;