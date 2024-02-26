import React from "react";
import { Link } from "react-router-dom";


const MealComponent = (props) => {


  return (

    <div className="col-12 col-md-3 gx-4 py-4">
      <div className="card-image">
        <Link to={`/meals/${props.idMeal}`} className="text-decoration-none ">
          <div className="w-200 position-relative px-5 mb-3"
            style={{ display: "flex align-item-center " }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "100px",
                display: "flex center",
                zIndex: "1"
              }}
            >
              <img 
                src={props.imageSRC}
                alt={props.title}
                style={{
                  borderRadius: "50px",
                  width: "100px",
                  height: "100px",
                  top: "-50%",
                  left: "-10px",
                  zIndex: "2"

                  }}
                className="position-absolute">
                
              </img>
              <div className="card">
                <h2 className="card-body mb-0 text-primary text-end fw-bold lead">{props.title}</h2>
                <p className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-secondary ">{props.idMeal}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>

  );
};
export default MealComponent;