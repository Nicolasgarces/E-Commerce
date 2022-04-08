import Swal from 'sweetalert2'

console.log(process.env.BACKEND_URL);
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isLogged: false,
			catMen:[],
			catWomen:[],
			infoProfile:{},
			infoAddress:{},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: (email,password) => {
				const raw = {
					"email": email,
					"password": password
				}
				fetch(process.env.BACKEND_URL + '/api/login',{
						method: 'POST',
						headers:{
							'Content-Type':'application/json'
						},
						body: JSON.stringify(raw)
					})
					.then((response)=> {
						if(response.status === 401){
							alert('Bad user or password')
						}
						return response.json()})
					.then(data => {
						localStorage.setItem("token",data.access_token)
						console.log(localStorage.getItem('token'));
						setStore({isLogged:true})
					})
					
			},
			auth: ()=>{
				let token = localStorage.getItem('token');
				token === '' || token === null || token === 'undefined' ? setStore({isLogged:false}):setStore({isLogged:true})
			},
			// obtenemos datos una vez autenticados
			getProfile: ()=>{
				let token = localStorage.getItem('token');

				fetch(process.env.BACKEND_URL + '/api/user/profile',{
					method: 'GET',
					headers:{
						'Content-Type':'application/json',
						'Authorization': 'Bearer ' + token,
					},
				})
				.then((response)=> response.json())
				.then(data => {
				console.log(data)
				})
			},
			logout: ()=>{
				localStorage.removeItem('token');
				setStore({isLogged:false})
				console.log("funciona");
			},
			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },


			getCatMen: () => {
				fetch(process.env.BACKEND_URL + '/api/product/men') //fetch para obtener la categoria men//
            	.then(res=>res.json())
            	.then(json=> setStore({ catMen: json }))
			},

			getCatWomen: () => {
				fetch(process.env.BACKEND_URL + '/api/product/women') //fetch para obtener la categoria women//
            	.then(res=>res.json())
            	.then(json=> setStore({ catWomen: json }))
			},

			getProfile: () =>{
				let token = localStorage.getItem('token');
				fetch(process.env.BACKEND_URL + '/api/user/profile',{
					method: 'GET',
					headers:{
						'Content-Type':'application/json',
						'Authorization': 'Bearer ' + token
					},
				})
				.then((response)=> {
					if(response.status === 401){
						alert('Bad user or password')
					}
					return response.json()})
				.then(json => setStore({infoProfile: json}))
				
			},
		
			editProfile: (isNameToModify, infoProfile) =>{
				let name;
				let lastName;
				let msgResult;
				Swal.fire({
					title: 'Type your new value',
					input: 'text',
					inputAttributes: {
					  autocapitalize: 'off'
					},
					showCancelButton: true,
					confirmButtonText: 'Save',
					showLoaderOnConfirm: true,
					preConfirm: (value) => {
						let token = localStorage.getItem('token');
						if(isNameToModify){
							name = value
							lastName = infoProfile.lastName
							infoProfile.name = value
						}else{
							name = infoProfile.name
							lastName = value
							infoProfile.lastName = value
						}
						const raw = {
							"name": name,
							"lastName": lastName
						}
					  return fetch(process.env.BACKEND_URL + '/api/user/update',{
						method: 'PUT',
						headers:{
							'Content-Type':'application/json',
							'Authorization': 'Bearer ' + token,
						},
						body: JSON.stringify(raw)
					})
					.then((response)=> response.json())
					.then(data => {
						msgResult = data;
					})
					},
					allowOutsideClick: () => !Swal.isLoading()
				  }).then((result) => {
					if (result.isConfirmed) {
					  Swal.fire({
						title: `${msgResult.msg}`,
						imageUrl: result.value.avatar_url
					  })
					}
				  })
				
			},

			getAddress: () => {
				let token = localStorage.getItem('token');
				fetch(process.env.BACKEND_URL + '/api/user/address',{
						method: 'GET',
						headers:{
							'Content-Type':'application/json',
							'Authorization': 'Bearer ' + token
						},
					})
					.then((response)=> {
						if(response.status === 401){
							alert('Bad user or password')
						}
						return response.json()})
						.then(json => setStore({infoAddress: json}))
						// .then(json => console.log(json))
							
			},

				updateAddress: () =>{
					let msgResult;
					Swal.fire({
						title: 'Type your new value',
						input: 'text',
						inputAttributes: {
						  autocapitalize: 'off'
						},
						showCancelButton: true,
						confirmButtonText: 'Save',
						showLoaderOnConfirm: true,
						preConfirm: (value) => {
							let token = localStorage.getItem('token');
							const raw = {
								"address": value,
							}
						  return fetch(process.env.BACKEND_URL + '/api/user/updateAddress',{
							method: 'POST',
							headers:{
								'Content-Type':'application/json',
								'Authorization': 'Bearer ' + token,
							},
							body: JSON.stringify(raw)
						})
						.then((response)=> response.json())
						.then(data => {
							msgResult = data;
						})
						},
						allowOutsideClick: () => !Swal.isLoading()
					  }).then((result) => {
						if (result.isConfirmed) {
						  Swal.fire({
							title: `${msgResult.msg}`,
							imageUrl: result.value.avatar_url
						  })
						}
					  })
					
				},

			

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
