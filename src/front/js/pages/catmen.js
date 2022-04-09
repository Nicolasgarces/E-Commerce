import React, {useContext} from 'react'
import  MenProducts from '../component/menProducts'
import { Context } from '../store/appContext'
import "../../styles/categories.css";

export const CatMen = () => {
  const { store, actions } = useContext(Context);
  console.log(store.catMen);
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
      <div className="menuMen col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-none d-sm-inline">Category Men</span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Poles
              </a>
            </li>
            <li>
              <a className="nav-link text-white" href="#">
                Jackets
              </a>
            </li>
            <li>
              <a className="nav-link text-white" href="#">
                Shirts
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
          </ul>
          <hr />
        </div>
      </div>

      <div className="col-lg-10 container mx-auto">
      {/* <h1 className='text-center py-2'>MEN CLOTHES</h1> */}
          {store.catMen.map((item, i) => {
            return (
        <div className="col-sm-6 col-md-4 col-lg-3 py-4 d-inline-flex" style={{width: "300px"}} key={i}>
              <MenProducts
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
              />
              </div>
            );
          })}
        </div>
    </div>
  </div>
   
  );
};

export default CatMen;