import React from 'react'
import productdetail from './ProductDetails';
import { useAuth0 } from "@auth0/auth0-react";
import './product.css';


const Product = ({product,setProduct,detail,view,close,setClose,addtocart}) => {


  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
    const filterproduct = (product) =>{
        const update = productdetail.filter((x)=>{
            return x.cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () =>{
        setProduct(productdetail);
    }
  return (
    <>
    
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

    
      <div className="products">
      <h2># Products</h2>
      <p>Home  .products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <ul>
                        <li onClick={() => AllProducts()}>All Products</li>
                        <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                        <li onClick={() => filterproduct("Smartwatch")}>Smartwatch</li>
                        <li onClick={() => filterproduct("Headphone")}>Headphone</li>
                        <li onClick={() => filterproduct("Camera")}>Camera</li>
                        <li onClick={() => filterproduct("Powerbank")}>Powerbank</li>
                        <li onClick={() => filterproduct("Heat Pipe")}>Heat Pipe</li>
                        <li onClick={() => filterproduct("Gaming")}>Gaming</li>
                        <li onClick={() => filterproduct("Alexa")}>Alexa</li>
                        <li onClick={() => filterproduct("Mobile stand")}>Mobile stand</li>
                    </ul>
                </div>
            </div>
            <div className="productbox">
                <div className="contant">
                    {
                      product.map((curElm)=>{
                        return(
                            <>
                           <div className="box" key={curElm.id}>
                            <div className="img_box">
                              <img src={curElm.img} alt={curElm.title} />
                               <div className="icon">
                                {
                                  isAuthenticated ?
                                    <li onClick={() => addtocart (curElm)}><i className='bx bx-cart'></i></li>
                                    :
                                    <li onClick={() => loginWithRedirect() }><i className='bx bx-cart'></i></li>
                                }
                                
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
        </div>
      </div>
    </>
  )
}

export default Product;
