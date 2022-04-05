import React, { useContext} from 'react'
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

export const MyAccount = () => {
    const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
      <div className="menuMen col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                My Account
              </a>
            </li>
            <li>
              <a className="nav-link text-white" href="#">
                My Orders
              </a>
            </li>
            <li>
              <a className="nav-link text-white" href="#">
                My Addresses
              </a>{" "}
            </li>
          </ul>
          <hr />
        </div>
      </div>

      <div className="row container mx-auto">
     
      <div className="jumbotron">
  <h1 className="display-4">My Account</h1>
  <h4 >Account Information</h4>
  <hr className="my-4"/>
  <h5>Contact Information</h5>
  <p className="lead">
    Name Lastname
  </p>
  <p className="lead">
    email@gmail.com
  </p>
  <Link to={'/'}>
    Edit
  </Link>
</div>
           
        </div>
    </div>
  </div>
  )
};
