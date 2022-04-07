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
			item: {},
			cartItems: [],
			cartQuantity: []
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

			getItem: (id) => {
				fetch('https://fakestoreapi.com/products/'+id)
            	.then(res=>res.json())
            	.then(json=>setStore({item: json}))
			},

			onAdd:(product,quantity)=>{
				let {id, title, price, image} = product
				const exist = getStore().cartItems.find(item => item.id === product.id)
				if(exist) {
					setStore(getStore().cartItems.map(item => item.id === product.id) ? {...exist, quantity: exist.quantity + 1} : item)
				} else {
					const newItem = {id, title, price, quantity, image}
					setStore({cartItems: getStore().cartItems.concat(newItem)})
				}
			  },

			getQuantity:(number) => {
				setStore({cartQuantity: getStore().cartQuantity.concat(number)})
			},

			deleteCart:(id)=>{
				setStore({cartItems: getStore().cartItems.filter(
				  (item,index) => index !== id)})
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
