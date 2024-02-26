import React, { useEffect, useState} from 'react';
import RecipeComponent from '../components/RecipeComponent';
import ImageComponent from '../components/ImageComponent';
import VideoComponent from '../components/VideoComponent';

const RecipeContainer = ({strYoutube , strMeal , strMealThumb , strInstructions , data})  => {
    
    const mealDataFromLocalStorage = JSON.parse(localStorage.getItem("meal"));
    const [mealData] = useState(mealDataFromLocalStorage);
    
    
    useEffect(() => {
        // storing input name
        localStorage.setItem("meals", JSON.stringify(mealData));
      }, [mealData]);
 
    return (
    <div className='container'>
    <div className='d-flex flex-row  w-100'>
        <h2 className='text-warning fw-bold'>{strMeal}</h2>
    </div> 
<div className='row row-cols-1 row-cols-2 align-items-stretch g-4 py-5'>
<div className='col'>
    <div className='card  h-100 overflow-hidden text-danger rounded-2 '>
<div className='d-flex flex-column h-100 text-danger'>
    <ImageComponent src={strMealThumb} alt={strMeal} />
</div>
    </div>
</div>
<div className='col'>
<div className='card card-cover h-100 overflow-hidden text-danger rounded-3 '>
    <div className='d-flex flex-column h-100 text-black  text-shadow-1'>
        <RecipeComponent instructions={strInstructions} data={data} />
    </div>
</div>
</div>
<div className='col'>
<div className="row row-cols-1 align-items-stretch g-4">
<div className='col'>
        <div className='card card-cover overflow-hidden text-danger rounded-2'>
            <div className='d-flex flex-column text-black'>
                <VideoComponent src={strYoutube} title={strMeal} />
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>

  )
}
export default RecipeContainer;