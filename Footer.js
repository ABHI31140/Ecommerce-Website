import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                    <img src={require('./img/img1.png')} alt="logo" />
                </div>
                <div className="detail">
                    <p>We are a team of designers and devolopers that create high quality WordPress</p>
                    <div className="icon">
                        <li><i className='bx bxl-facebook'></i></li>
                        <li><i className='bx bxl-instagram'></i></li>
                        <li><i className='bx bxl-twitter'></i></li>
                        <li><i className='bx bxl-youtube'></i></li>
                    </div>
                </div>
            </div>
            <div className="account">
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className="page">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
