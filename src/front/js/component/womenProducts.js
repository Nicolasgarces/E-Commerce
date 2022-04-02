import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const WomenProducts = (props) => {
  const { store, actions } = useContext(Context);
  return (
        <div className="card">
          <img
            className="card-img-top"
            src={props.image}
            alt="Card image cap" 
          />
          <div className="card-body">
            <h6 className="card-text">{props.title}</h6>
            <p className="card-text">{"$"+props.price}</p>
          </div>
        </div>
  );
};

export default WomenProducts;
