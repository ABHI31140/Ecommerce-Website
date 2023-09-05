import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Nav = ({searchbtn}) => {

  const[search ,setSearch]=useState();
  const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <div className="main_header">       
        <div className="container">
          <div className="logo">
            <img src={require('./img/img1.png')} alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" value={search} placeholder="Search Your Product..." autoComplete="off" onChange={(e) => setSearch(e.target.value )}/>
            <button onClick={() => searchbtn (search)}>Search</button>
          </div>
          <div className="icon">
            {
              isAuthenticated &&
              (
                <div className="account">
                <div className="user_icon">
                <i className='bx bx-user'></i>
                </div>
                <p>Hello, {user.name}</p>
              </div>
              )
            }
           
            <div className="second_icon">
           <Link to='/' className="link"><i className='bx bx-heart'></i></Link>
           <Link to='/cart' className="link"><i className='bx bx-shopping-bag'></i></Link>
           </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
        <div className="nav">
        <ul>
            <li>
              <Link to='/' className="link">Home</Link>
            </li>
            <li>
              <Link to='/product'className="link">Product</Link>
            </li>
            <li>
              <Link to='/about'className="link">About</Link>
            </li>
            <li>
              <Link to='/contact'className="link">Contact</Link>
            </li>
          </ul>
        </div>
          <div className="auth">
            {
                isAuthenticated ?
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i className='bx bx-log-out'></i></button>:
              <button onClick={() =>loginWithRedirect()}><i className='bx bx-log-in'></i></button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
