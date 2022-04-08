import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from 'sweetalert2'

export const FormRegister = () => {

	const defaultData = {
        name: '',
        lastName: '',
		email: '',
        password: '',
		address: ''	,
    }

	const [data, setData] = useState(defaultData);
	const [isRegister, setIsRegister] = useState(false);
	const [onCheck, setonCheck] = useState(false);

	const onChangeData = (e) => {

		setData({
            ...data,
            [e.target.name]: e.target.value,
        });
	}

	const guardarUsuario = () => {

		if (data.name === "" || data.lastName === "" || data.address === "" || data.email === "" || data.password === "") {
			
			Swal.fire({
				icon: 'warning',
				title: 'Fields marked with * are required',
				confirmButtonColor: '#212529'
				})

		} else {
			
			if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(data.email)){

				if(onCheck === true){
					
					fetch(process.env.BACKEND_URL+'/api/user', {
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json',
						},
					})
					.then((response) => {
			
						if(response.status === 201){
							Swal.fire({
								icon: 'success',
								title: 'Your account has been created',
								confirmButtonColor: '#212529'
								})
							
							setIsRegister(true)
			
						}else if(response.status === 200){
							Swal.fire({
								icon: 'error',
								title: 'Email already exists',
								confirmButtonColor: '#212529'
								})
							
							setIsRegister(false)
						}
			
						return response.json()
			
					})
					.then((data) => {
						
						setData(defaultData)

					});
				}else{

					Swal.fire({
						icon: 'warning',
						title: 'Accept the terms and conditions to continue',
						confirmButtonColor: '#212529'
						})

				}
				
			}else{

				Swal.fire({
					icon: 'warning',
					title: 'Enter a valid email',
					confirmButtonColor: '#212529'
					})
				
			}

		}		
	}

	return (
		<>
			{isRegister?<Redirect  to="/"/>:
				<div className="d-flex justify-content-center content py-5">
					<div className="w-25">
						<h2>Register Form</h2>
						<div className="form-group mt-3">
							<input
								type="text"
								className="form-control"
								id="firtsName"
								aria-describedby="firtsNameHelp"
								placeholder="First Name*"
								onChange={onChangeData}
								name = "name"
								value={data.name}
								required
							/>
						</div>
						<div className="form-group mt-3">
							<input
								type="text"
								className="form-control"
								id="lastName"
								aria-describedby="lastNameHelp"
								placeholder="Last Name*"
								onChange={onChangeData}
								name = "lastName"
								value={data.lastName}
							/>
						</div>
						<div className="form-group mt-3">
							<input
								type="text"
								className="form-control"
								id="address"
								aria-describedby="lastNameHelp"
								placeholder="Address*"
								onChange={onChangeData}
								name = "address"
								value={data.address}
							/>
						</div>
						<div className="form-group mt-3">
							<input
								type="email"
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Email*"
								onChange={onChangeData}
								name = "email"
								value={data.email}
							/>
						</div>
						<div className="form-group mt-3">
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Password*"
								onChange={onChangeData}
								name = "password"
								value={data.password}
							/>
						</div>
						<div className="form-check mt-3">
							<input
								type="checkbox"
								className="form-check-input"
								id="check"
								onChange={(e)=>setonCheck(e.target.checked)}
							/>
							<label className="form-check-label" htmlFor="check">
								I accept Terms and Conditions
							</label>
						</div>
						<button type="buttom" onClick={()=> guardarUsuario()} className="btn btn-primary mt-3 mb-3 w-100 bg-dark">
							CREATE ACCOUNT
						</button>
					</div>
				</div>
			}
		</>	
	);
};

export default FormRegister;