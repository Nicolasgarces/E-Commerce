import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar";
import { MenSugggestedItems } from "../component/MenSugggestedItems";
import { WomenSugggestedItems } from "../component/WomenSugggestedItems";

export const Single = props => {
	const params = useParams();
  const { store, actions } = useContext(Context);
  console.log(store.item);
  console.log(store.cartItems);
  const [quantity, setQuantity] = useState("")
  // const handleAddtoCart = () =>{
  //   actions.onAdd(store.item)
  // }
  // const [cartItems, setCartItems]= useState([])
  // console.log(cartItems);
  // const product = store.item
  // console.log(product);
  // const onAdd = () => {
  //   setCartItems([...cartItems, {...store.item}])
  // }
 
	useEffect(()=>{
		actions.getItem(params.theid)
	},[])
	return (
    // <div className="jumbotron">
    // 	<img src={store.item.image}></img>

    // 	<Link to="/">
    // 		<span className="btn btn-primary btn-lg" href="#" role="button">
    // 			Back home
    // 		</span>
    // 	</Link>
    // </div>
    <div className="row container">
      <div className="col-lg-8">
        <div
          className="ecommerce-gallery"
          data-mdb-zoom-effect="true"
          data-mdb-auto-height="true"
        >
          <div className="row py-3 shadow-5">
            <div className="col-12 mb-1">
              <div className="lightbox">
                <img
                  src={store.item.image}
                  alt="Gallery image 1"
                  className="ecommerce-gallery-main-img active w-100"
                />
              </div>
            </div>
            {/* <div className="col-3 mt-1">
              <img
                src={store.item.image}
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                alt="Gallery image 1"
                className="active w-100"
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src={store.item.image}
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                alt="Gallery image 2"
                className="w-100"
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src={store.item.image}
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                alt="Gallery image 3"
                className="w-100"
              />
            </div>
            <div className="col-3 mt-1">
              <img
                src={store.item.image}
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                alt="Gallery image 4"
                className="w-100"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 my-3 mx-auto">
        <div className="card h-100 text-center">
          <h5 className="card-header">Product details</h5>
          <div className="card-body">
            <h5 className="card-title">{store.item.title}</h5>
            <p className="card-text">$ {store.item.price}</p>
            <p>item {store.item.id}</p>
            <span>Units</span>
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                title="Untis"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>
            <div className="add-to-cart">
              <button className="btn btn-dark" onClick={()=>actions.onAdd(store.item, quantity)}>Add to cart</button>
            </div>
            <span></span>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4>
          You May Also Like
        </h4>
      </div>
      {/* <div className="col-lg-12 mx-auto d-flex mb-3">
        <div className="col-4 mt-1">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
            alt="Gallery image 1"
            className="active w-100"
          />
        </div>
        <div className="col-4 mt-1">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
            alt="Gallery image 3"
            className="w-100"
          />
        </div>
        <div className="col-4 mt-1">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
            alt="Gallery image 4"
            className="w-100"
          />
        </div>
      </div> */}
  {/* <!-- Carousel wrapper --> */}
<div
  id="carouselMultiItemExample"
  className="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  {/* <!-- Controls --> */}
  <div className="d-flex justify-content-center mb-4">
    <button
      className="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* <!-- Inner --> */}
      {store.item.id < 5 ? (
        store.catMen.map((item)=> (
        <MenSugggestedItems key={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        id={item.id}
        />))
      ):store.catWomen.map((item)=> (
        <WomenSugggestedItems key={item.id}
        title={item.title}
        price={item.price}
        image={item.image}
        id={item.id}
        />
      ))
    }
  </div>
</div>
  );
};

Single.propTypes = {
	match: PropTypes.object
};
