import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import Homeproduct from "./homeproduct";

const Home = ({detail,view,close,setClose,addtocart}) => {

  return (
    <div>
      {
  close ? 
  <div className="product_detail">
  <div className="container">
  <button onClick={() => setClose(false)} className='closebtn'><i class='bx bxs-x-circle'></i></button>
   
    {
          detail.map((event)=>{

            return(
              <div className="productbox">
                <div className="img_box">
                  <img src={event.img} alt={event.title} />
                </div>
                <div className="detail">
                  <h4>{event.cat}</h4>
                  <h2>{event.title}</h2>
                  <p>A Screen Everyone Will Love: Whether your family is streming or video chatting with friends tablet A8...</p>
                  <h3>{event.price}</h3>
                  <button>Add To Cart</button>
                </div>
              </div>
            )

          })
    }
    
  </div>
</div> : null
}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Notebook  collection 2023</h2>
            <Link to='/product' className='link'>Shop Now</Link>
          </div>
          <div className="img_box">
            <img src={require('./img/apple tab.jpg')} alt="tab" />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src={require('./img/phone.jpg')} alt="img" />
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={require('./img/smartwatch.jpg')} alt="img" />
            </div>
            <div className="detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={require('./img/head1.jpg')} alt="img" />
            </div>
            <div className="detail">
              <p>63 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src={require('./img/laptop.png')} alt="img" />
            </div>
            <div className="detail">
              <p>36 Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
            <i className='bx bxs-truck'></i>
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order Above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <i className='bx bx-dollar'></i>
            </div>
            <div className="detail">
              <h3>Return And Refund</h3>
              <p>Money Back Guaranty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <i className='bx bxs-offer'></i>
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <i className='bx bx-headphone'></i>
            </div>
            <div className="detail">
              <h3>Custumer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
      {
        Homeproduct.map((curElm)=>{
          return(
            <>
            <div className="box" key={curElm.id}>
              <div className="img_box">
                <img src={curElm.img} alt={curElm.title} />
                <div className="icon">
                  <li onClick={() => addtocart (curElm)}><i className='bx bx-cart'></i></li>
                  <li onClick={()=> view (curElm)}><i className='bx bx-show-alt'></i></li>
                  <li><i className='bx bx-heart'></i></li>
                </div>
              </div>
              <div className="detail">
                <p>{curElm.cat}</p>
                <h3>{curElm.title}</h3>
                <h4>{curElm.price}</h4>
              </div>
            </div>
            </>
          )
        })
      }
        </div>
      </div>
      <div className="banner">
        <div className="container">
        <div className="detail">
          <h4>LATEST TECHNOLOGY ADDED</h4>
          <h3>Apple iPad 10.2 9th Gen - 2021</h3>
          <p>$ 986</p>
          <Link to='/product' className='link'>Shop Now</Link>
        </div>
        <div className="img_box">
          <img src={require('./img/tablet110.png')} alt="img" />
        </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
