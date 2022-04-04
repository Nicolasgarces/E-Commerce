import React from "react";
import { useState } from "react";

export const FormRegister = () => {

	const defaultData = {
        name: '',
        lastName: '',
		email: '',
        password: '',	
    }

	const [data, setData] = useState(defaultData);

	const onChangeData = (e) => {

		console.log(e.target);
		setData({
            ...data,
            [e.target.name]: e.target.value,
        });
	}

	const guardarUsuario = () => {
		console.log(process.env.BACKEND_URL)
		fetch(process.env.BACKEND_URL+'/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
				alert("Creado con éxito")
				setData(defaultData)
				document.location.href="/"
            });
	}

	return (
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
	);
};

export default FormRegister;
