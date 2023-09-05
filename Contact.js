import React, { useState } from 'react'
import './contact.css';
import { useAuth0 } from '@auth0/auth0-react';

const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [users,setUser]=useState({Name:'',Email:'',Subject:'',Massage:''})

  let name , value
  const data = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...users,[name]:value})
  }
  const  senddata = async (e) =>{
    const{Name,Email,Subject,Massage} = users;
    e.preventDefault();
    setUser("");
    const options = {
      method: 'POST',
      Headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify({
        Name,Email,Subject,Massage
      })
    }
    const res = fetch('https://e-commerce-contact-374fd-default-rtdb.firebaseio.com/Massage.json',options);
    console.log(res);
    if(res){
      alert('Form submitted Succesfully')
    }else{
      alert('An error Occured')
    }

  }
  return (
    <>
     <div className="contact_container">
      <div className="contant">
        <h2># Contact Us</h2>
        <div className="form">
          <form onChange={data}>
          <input type="text" name='Name' value={users.Name} placeholder='Enter Your Full Name'   autoComplete='off' onChange={data}  required/>
          <input type="email" name='Email' value={users.Email} placeholder='Enter Your E-mail'  autoComplete='off'  onChange={data}  required/>
          <input type="text" name='Subject' value={users.Subject} placeholder='Enter Your Subject'   autoComplete='off' onChange={data}  required/>
          <textarea name="Massage" value={users.Massage} placeholder='Your Massage'  autoComplete='off' onChange={data}  required></textarea>
          {
            isAuthenticated ?
                <button type='submit' onClick={senddata}>Send</button>:
                <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
          }
          </form>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Contact
