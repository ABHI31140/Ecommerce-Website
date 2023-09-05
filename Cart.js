import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = ({cart,setCart}) => {

    // increment qty

    const incqty = (product) => {
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exist,qty: exist.qty + 1}:curElm
        }))

    }
    // decrement qty

    const decqty = (product) => {
    const exist = cart.find((x)=>{
        return x.id === product.id
    })
    setCart(cart.map((curElm)=>{
        return curElm.id === product.id ? {...exist,qty: exist.qty - 1}:curElm
    }))
    }
    // remove product
    const removeproduct = (product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qty > -1){
            setCart(cart.filter((x)=>{
                return x.id !== product.id
            }))
        }
    }
    // total price

    const Totalprice = cart.reduce((price,item) => price + item.qty * item.price,0)
  return (
    <>
    
     <div className="cart_container">
     { cart.length === 0 &&
                        <div className="empty_cart">
                            <h2 className="empty">Cart is Empty</h2>
                            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
                        </div>
                        
                        }
        <div className="contant">
            {
                cart.map((curElm)=>{
                    return(
                        <>
                    <div className="cart_item" key={curElm.id}>
                        <div className="img_box">
                            <img src={curElm.img} alt={curElm.title} />
                        </div>
                        <div className="detail">
                            <div className="info">
                            <h4>{curElm.cat}</h4>
                            <h3>{curElm.title}</h3>
                            <p>Price: ${curElm.price}</p>
                            <div className="qty">
                                <button className='decqty'onClick={() => decqty (curElm)}>-</button>
                                <input type="text" value={curElm.qty} />
                                <button className='incqty' onClick={() => incqty (curElm)}>+</button>
                            </div>
                            <h4 className='subtotal'>sub total: ${curElm.price * curElm.qty}</h4>
                            </div>
                            <div className="close">
                            <button onClick={()=> removeproduct (curElm)}><i class='bx bxs-x-circle'></i></button>
                            </div>
                        </div>
                </div>
                        </>
                    )
                })
            }
         
        </div>
        {
            cart.length > 0 &&
            <>
                <h2 className="totalprice">Total: ${Totalprice}</h2>
                <button className="checkout">Checkout</button>
            </>
        }
    </div> 
    </>
  )
}

export default Cart
