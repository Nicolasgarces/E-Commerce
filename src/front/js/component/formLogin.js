// import React, {useState, useContext} from "react";
// import { Context} from "../store/appContext";
// import { Redirect } from "react-router-dom";

// const LoginForm = ()=>{
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const {store,actions} = useContext(Context);
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         actions.login(email, password);
//         setEmail("")
//         setPassword("")
//     }
// console.log(store.isLogged);
//     return(
//         <>
//         {store.isLogged? <Redirect to="/demo"/>:
//         <form className="container" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           placeholder="Email"
//           onChange={(e)=> setEmail(e.target.value)}
//           value={email}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="exampleInputPassword1"
//           placeholder="Password"
//           onChange={(e)=> setPassword(e.target.value)}
//           value={password}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Log In
//       </button>
//     </form>}
//     </>
//     )
// }


// export default LoginForm;