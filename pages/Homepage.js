import React, { useEffect, useState } from "react";
import MealsContainer from "../containers/MealsContainer";
import api from "../assets/api.json";
import Navbar from "../containers/Navbar";
import RandomMealsContainer from "../containers/RandomMealsContainer";

export const Homepage = () => {
  const [searchValue, setSearchValue] = useState("");
  //const searchValue = "Beef";
  const [meals, setMeals] = useState(api);
  const [title, setTitle] = useState();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setTitle(`Meals with: ${e.target.value}`);
  };

  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setMeals(responseJSON));
  };

  useEffect(
   
    () => {
      fetchData(searchValue);
    },
  
    [searchValue]
  );

  return (
    <>
<Navbar searchValue={searchValue} 
handleInputChange={handleInputChange}
    />
      <div className="container">
      
      <div class="d-flex flex-column h-100 p-5 pb-3">
            <RandomMealsContainer />
            </div>
        <MealsContainer data={meals}  title={title} />
        </div>
    </>
  );
};
export default Homepage;
