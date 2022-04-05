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
		address: ''	
    }

	const [data, setData] = useState(defaultData);
	const [isRegister, setIsRegister] = useState(false);

	const onChangeData = (e) => {

		console.log(e.target);
		setData({
            ...data,
            [e.target.name]: e.target.value,
        });
	}

	const guardarUsuario = () => {
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
						// position: 'top-end',
						icon: 'success',
						title: 'Your account has been created',
						// showConfirmButton: false,
						// timer: 5000
						})
					
					setIsRegister(true)

				}else if(response.status === 200){
					Swal.fire({
						icon: 'error',
						title: 'Email already exists',
						})
					
					setIsRegister(false)
				}

				return response.json()

			})
            .then((data) => {
				
				// alert("Creado con éxito")

				console.log(data);				

				setData(defaultData)
				// document.location.href="/"
            });
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
								placeholder="First Name"
								onChange={onChangeData}
								name = "name"
								value={data.name}
							/>
						</div>
						<div className="form-group mt-3">
							<input
								type="text"
								className="form-control"
								id="lastName"
								aria-describedby="lastNameHelp"
								placeholder="Last Name"
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
								placeholder="Address"
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
								placeholder="Email"
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
								placeholder="Password"
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
