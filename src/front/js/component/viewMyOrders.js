import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useState } from "react";

export const ViewMyOrders = () => {
    const { store, actions } = useContext(Context);
  console.log(store.infoProfile.name);
  useEffect(() => {
    actions.getProfile();
    actions.getAddress();
    actions.getUserOrders();
  }, []);


	return (
		<div className="py-5 container content">
            <div className="row">
                {/* <div className="col-sm-4">                    
                </div> */}
                <div className="col-sm-12">
                    <h2 className="mt-2 mb-0">Address book</h2>
                    <hr className="mt-0"></hr>
                    <h4>Invoicing and shipping address</h4>
                    <h6>Full name:{" " + store.infoProfile.name} {" " + store.infoProfile.lastName}</h6>
                    <h6>Address: {" " +  store.infoAddress.address}</h6>                 
                </div>
            </div>
            <div className="row">
                {/* <div className="col-sm-4">                    
                </div> */}
                <div className="col-sm-12">
                    <h2 className="mt-2 mb-0">Recent orders</h2>
                    <hr className="mt-0"></hr>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product #</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Send To</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col" rowSpan={store.userOrders.length}>Total</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            
                                {store.userOrders.map((item,i) => {
                                    return(
                                    <>
                                    <tr>
                                       
                                        <th scope="row">{item.productID}</th>
                                        <td>{item.title}</td>
                                        <td>{store.infoProfile.name} {store.infoProfile.lastName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.TotalMount}</td>
                                    </tr>
                                    </>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
		</div>
	);
};

export default ViewMyOrders;