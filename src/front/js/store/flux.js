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
				fetch("https://fakestoreapi.com/products/category/men's%20clothing") //fetch para obtener la categoria men//
            	.then(res=>res.json())
            	.then(json=> setStore({ catMen: json }))
			},

			getCatWomen: () => {
				fetch("https://fakestoreapi.com/products/category/women's%20clothing") //fetch para obtener la categoria women//
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
		
			editProfile: () =>{
				Swal.fire({
					title: 'Submit your Github username',
					input: 'text',
					inputAttributes: {
					  autocapitalize: 'off'
					},
					showCancelButton: true,
					confirmButtonText: 'Look up',
					showLoaderOnConfirm: true,
					preConfirm: () => {
						let token = localStorage.getItem('token');
					  return fetch(process.env.BACKEND_URL + '/api/update',{
						method: 'put',
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
					allowOutsideClick: () => !Swal.isLoading()
				  }).then((result) => {
					if (result.isConfirmed) {
					  Swal.fire({
						title: `${result.value.login}'s avatar`,
						imageUrl: result.value.avatar_url
					  })
					}
				  })
				
			},

			getAdress: () => {
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
					.then(data => {
					console.log(data);
					})	
			},

			updateAdress: () => {
				let token = localStorage.getItem('token');
				fetch(process.env.BACKEND_URL + '/api/user/updateAddress',{
						method: 'POST',
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
					.then(data => {
					console.log(data);
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
