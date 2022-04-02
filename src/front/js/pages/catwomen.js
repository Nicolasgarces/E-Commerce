import React, { useContext } from "react";
import WomenProducts from "../component/womenProducts";
import { Context } from "../store/appContext";
import "../../styles/categories.css";

export const CatWomen = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="menuWomen col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5 d-none d-sm-inline">Category Women</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                Tops
                </a>
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Jackets
                </a>
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Tshirts
                </a>{" "}
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Shorts
                </a>{" "}
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Pants
                </a>{" "}
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Joggers
                </a>
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                Skirts
                </a>
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                Jeans
                </a>
              </li>
              <li>
                <a className="nav-link text-white" href="#">
                  Dresses
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>

        <div className="row container mx-auto">
          {/* <h1 className="text-center py-2">WOMEN CLOTHES</h1> */}
          {store.catWomen.map((item, i) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-6 py-4 d-inline-flex" style={{width: "400px"}}>
                <WomenProducts
                  key={i}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CatWomen;
