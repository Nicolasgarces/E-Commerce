import React, { useContext} from 'react'
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

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
              <Link to={'/myaccount/'} className="nav-link text-white" href="#">
                My Account
              </Link>
            </li>
            <li>
              <Link to={'/userorders/'} className="nav-link text-white" href="#">
                My Orders
              </Link>
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
  <span onClick={()=> actions.editProfile()}>
    Edit
  </span>
</div>
           
        </div>
    </div>
  </div>
  )
};
