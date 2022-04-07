import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cartitem = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="offcanvas-body">
              <div className=" mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={props.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="row card-body">
                      <div className="col-lg-6">
                        <h5 className="card-title">Title: {props.title}</h5>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end">
                          <i onClick={() => actions.deleteCart(props.id)} className="bi bi-trash"></i>
                      </div>
                      {/* <div className="col-lg-6">
                        <p className="card-text text-muted">Size:</p>
                      </div> */}
                      {/* <div className="col-lg-6">
                        <p className="card-text text-muted d-flex justify-content-end">S</p>
                      </div> */}
                      <div className="col-lg-6 p-2 bd-highlight">
                        <p className="card-text">
                          <small className="text-muted">Amount: {props.quantity}</small>
                        </p>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end p-2 bd-highlight">
                        <p className="card-text">
                          <small className="text-muted">$ {props.quantity * props.price}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
