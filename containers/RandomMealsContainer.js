import React from 'react'
import RandomMealsComponent from "../components/RandomMealsComponent";

 const RandomMealsContainer = ()  => {
  return (
    <>
    <div className='row row-cols-12 row-cols-md-5  justify-content-between g-4'>
      <RandomMealsComponent />
      <RandomMealsComponent />
      <RandomMealsComponent />
      <RandomMealsComponent />
    </div>
    </>
  );
};
export default  RandomMealsContainer;