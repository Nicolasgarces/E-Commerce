import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const MyAccount = () => {
  const { store, actions } = useContext(Context);
  console.log(store.infoProfile.name);
  useEffect(() => {
    actions.getProfile();
    actions.getAddress();
  }, []);

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
                <Link
                  to={"/myaccount/"}
                  className="nav-link text-white"
                  href="#"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to={"/viewmyorders/"}
                  className="nav-link text-white"
                  href="#"
                >
                  My Orders
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div className=" col-lg-10 container mx-auto">
          <div className=" row jumbotron" style={{width: "100%"}}>
            <div className="col-lg-12"><h1 className="display-4 text-center">My Account</h1></div>
            <h4 className=" text-center">Account Information</h4>
            <hr className="my-4" />
          
            <div className="col-lg-12"><h5 className="container ">Contact Information</h5></div>
            <div className="col-lg-8"><h5 className="container">Name:<span className="lead">{" " + store.infoProfile.name}</span></h5></div>
            <div className="col-lg-4" style={{color: "orange"}}><span onClick={() => actions.editProfile(true, store.infoProfile)}>Edit</span></div>
            <div className="col-lg-8"><h5 className="container">Lastname:<span className="lead">{" " + store.infoProfile.lastName}</span></h5></div>
            <div className="col-lg-4" style={{color: "orange"}}><span onClick={() => actions.editProfile(false, store.infoProfile)}>Edit</span></div>
            <hr className="my-4" />
            <div className="col-lg-12"><h5 className="container" >Shipping Address</h5></div>
            <div className="col-lg-8"><h5 className="container">User Address:<span className="lead">{" " + store.infoAddress.address}</span></h5></div>
            <div className="col-lg-4" style={{color: "orange"}}><span className="text-start" onClick={() => actions.updateAddress()}>Edit</span></div>

          </div>
        </div>
      </div>
    </div>
  );
};
