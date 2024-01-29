import React from 'react'
import "./accountStyle.css"
import image from "../Img/profileImage.jpg"


const Account = () => {
  return (
   <>
   
    <div className='account'>
      <div className='profilePhoto'>
        <img src={image} alt=''/>
      </div>
      <div className='profileDetails'>
        <div className='name'>
          <h4>First name:</h4>
          <p>{localStorage.getItem("firstName")}</p>
        </div>
        <div className='name'>
          <h4>Last Name:</h4>
          <p>{localStorage.getItem("lastName")}</p>
        </div>
        <div className='name'>
          <h4>Phone Number:</h4>
          <p>{localStorage.getItem("phoneNumber")}</p>
        </div>
        <div className='name'>
          <h4>Email:</h4>
          <p>{localStorage.getItem("email")}</p>
        </div>
        <div className='name'>
          <h4>Account Number:</h4>
          <p>{localStorage.getItem("accountNumber")}</p>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Account