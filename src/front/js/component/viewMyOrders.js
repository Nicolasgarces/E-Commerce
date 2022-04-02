import React from "react";
import { useState } from "react";

export const ViewMyOrders = () => {

	return (
		<div className="py-5 container">
            <div className="row">
                {/* <div className="col-sm-4">                    
                </div> */}
                <div className="col-sm-12 mb-1 mt-1">
                    <h5>Email: luisyosa20171@gmail.com</h5>
                    <a href="#">Password change</a>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-sm-4">                    
                </div> */}
                <div className="col-sm-12">
                    <h2 className="mt-2 mb-0">Address book</h2>
                    <hr className="mt-0"></hr>
                    <h4>Invoicing and shipping address</h4>
                    <h6>Full name: Luis Yosa</h6>
                    <h6>Address: Avenida siempre viva # 7 - 26</h6>
                    <h6>Phone: +573114841841</h6>
                    <h6>City: Santiago de Cali</h6>
                    <h6>Country: Colombia</h6>                    
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
                                <th scope="col">Order #</th>
                                <th scope="col">Date</th>
                                <th scope="col">Send To</th>
                                <th scope="col">Total</th>
                                <th scope="col">State</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>2022/04/01</td>
                                <td>Luis Yosa</td>
                                <td>$50.000</td>
                                <td>Pending</td>
                                {/* <td><a href="#">View Order</a></td> */}
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2022/01/10</td>
                                <td>Luis Yosa</td>
                                <td>$1.500.000</td>
                                <td>Shipped</td>
                                {/* <td><a href="#">View Order</a></td> */}
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>2021/12/15</td>
                                <td>Luis Yosa</td>
                                <td>$200.000</td>
                                <td>Shipped</td>
                                {/* <td><a href="#">View Order</a></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
		</div>
	);
};

export default ViewMyOrders;