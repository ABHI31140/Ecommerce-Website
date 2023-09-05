import "./App.css";
import { useState } from "react";
import Nav from "./Nav";
import Rout from "./Rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import productdetail from "./ProductDetails";

function App() {
  const [cart , setCart]=useState([])
//product details
const[close,setClose]=useState(false);
const [detail , setDetail]=useState([])
  //filter product
  const[product,setProduct]=useState(productdetail);
  const searchbtn = (product) =>{
    const change = productdetail.filter((x)=>{
      
      return x.cat === product;
    })
    setProduct(change);
  }
 // product detail

  const view = (product) =>{
setDetail([{...product}])
setClose(true)
  }
  // add to cart
 
  const addtocart = (product) =>{
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
   if(exist){
    alert("This Product is already added to cart")
   }
   else{
    setCart([...cart, {...product,qty:1}])
    alert("Product is added to cart Succsesfully")
   }
  }

  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
