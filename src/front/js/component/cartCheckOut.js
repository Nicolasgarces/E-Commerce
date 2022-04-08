import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Context } from "../store/appContext";


export const CartCheckOut = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="offcanvas-body d-flex align-items-end">
        {/* <div className="mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-lg-6">
              <p className="card-title text-muted">Subtotal</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <p className="card-title text-muted">$ {props.quantity * props.price}</p>
            </div>

            <div className="col-lg-6">
              <p className="card-title text-muted">Shipping</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <p className="card-title text-muted">$000.000</p>
            </div>
            <div className="col-lg-6">
              <h6 className="card-title">Total</h6>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <h6 className="card-title">$ {props.quantity * props.price}</h6>
            </div>
            <div className="col-lg-12  text-center">
              <Link to={"/single/"} className="btn btn-dark bottom-10">
                 Checkout
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    )
}
