import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const WomenSugggestedItems = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="carousel-inner py-4">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <img
                    src={props.image}
                    className="card-img-top"
                    alt="Waterfall"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">{props.price}</p>
                    <Link to={"/single/"+props.id}>
                    <button className="btn btn-dark">
                      Get it
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
 }

  