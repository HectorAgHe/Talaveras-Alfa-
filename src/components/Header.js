import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"


const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping  Over $100 & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className='text-white' href="tel:+52 123 456 7890">+52 123 456 7890</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="col-2">
            <h2>
              <Link className="text-white">
                Dev Corner
              </Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2" />
              <span class="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6"/>
                </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-betwen">
              <div>
               <Link>
                <img src="/images/compare.svg" alt="compare" />
                <p>Compare <br /> Products</p>
               </Link>
              </div>
              
              <div>
               <Link>
                <img src="/images/wishList.svg" alt="wishlist" />
                <p>Favorite <br /> wishList </p>
               </Link>
              </div>

              <div>
               <Link>
                <img src="/images/user.svg" alt="" />
                <p>Log in<br /> My Account</p>
               </Link>
              </div>
              <div>
               <Link className="d-flex align-items-center gap">
                <img src="/images/cart.svg" alt="cart" />
                <div className= "d-flex flex-column">
                  <span className="badge bg-white text-dark">0</span>
                </div>
               </Link>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header