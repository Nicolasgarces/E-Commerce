import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../component/Navbar";

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
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  {/* <!-- Controls --> */}
  <div class="d-flex justify-content-center mb-4">
    <button
      class="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  {/* <!-- Inner --> */}
  <div class="carousel-inner py-4">
    {/* <!-- Single item 1--> */}
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Single item 2 --> */}
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                class="card-img-top"
                alt="Storm Clouds"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                class="card-img-top"
                alt="Hot Air Balloons"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Single item 3 --> */}
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                class="card-img-top"
                alt="Peaks Against the Starry Sky"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                class="card-img-top"
                alt="Bridge Over Water"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div class="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                class="card-img-top"
                alt="Purbeck Heritage Coast"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}
</div>
{/* <!-- Carousel wrapper --> */}
    </div>
  );
};

Single.propTypes = {
	match: PropTypes.object
};
