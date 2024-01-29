import React, { useContext, useState } from 'react'
import "./enteraccountStyle.css"
import { Link } from 'react-router-dom'
import signupimg from "../Img/signupimg.png"
import theprofileImage from "../Img/profileImage.jpg"
import axios from "axios"
import Swal from 'sweetalert2'
import { Thecontext } from '../../App'


const Signup = () => {


  const {currentBalance, setCurrentBalance,
         accountNumber, setAccountNumber,
         firstName, setFirstName,
         lastName, setLastName,
         email, setEmail,
         phoneNumber, setPhoneNumber
        } = useContext(Thecontext)



  const [profileImage, setProfileImage] = useState([theprofileImage])
  const [formErrors, setFormErrors]  = useState()

  const handleImageChange = (e)=>{
     setProfileImage(URL.createObjectURL(e.target.files[0]))
  }

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    pin: "",
  })

  const handleInputChange = (e)=>{
    const { name, value } = e.target
    setUserData({...userData, [name]: value})
    console.log(userData)
}


  const theData = {firstname:userData.firstName, lastname: userData.lastName, phoneNumber: userData.phoneNumber, email: userData.email, userPassword: userData.password, confirmPassword: userData.confirmPassword, transactionPin: userData.pin}
    const url = "https://flipcash-banking.onrender.com/api/v1/user/sign-up"


  const handleSignup = async(e)=>{

    e.preventDefault();
    setFormErrors(validate(userData));

      try{
          const response = await axios.post(url, theData)
          console.log(response)
          localStorage.setItem("userToken", response.data.token)
          
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "ok",
          }).then(function() {
                 window.location.href = "/dashboard";
              }) 
      }
      catch(err){
        Swal.fire({
          title: "error!",
          text: err.response.message,
          icon: "error",
          confirmButtonText: "ok",
          }) 
          console.log(err)
      }
  }

  const validate = (values)=>{
    const errors = {};
    const corremail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const correname = /^[a-z ,.'-]+$/i
    // console.log(values.confirmPassword)
    if ( !values.firstName ) {
      errors.firstName = "first name is required!"
    }
    if ( !values.lastName ) {
      errors.lastName = "last name is required!"
    }
    if ( !values.email ) {
      errors.email = "email is required!"
    } else if (!corremail.test(values.email)) {
      errors.email = "This is not a valid email format!"
    }
    if ( !values.phoneNumber ) {
      errors.phoneNumber = "phone number is required!"
    }
    if ( !values.password ) {
      errors.password = "password is required!"
    } else if ( values.password.length < 7) {
        errors.password = "password should not be less than 7 characters!"
      }
    if ( !values.confirmPassword ) {
      errors.confirmPassword = "must confirm password"
    } else if(values.confirmPassword === values.password) {
        errors.confirmPassword = ""
    }else{ 
        errors.confirmPassword = "the password must  match "
    }

    return errors;
    
  }


  return (
    <>
    
        <div className='signup'>
            <div className='signupimg'>
              <img src={signupimg} alt=''/>
            </div>
            <div className='theSignup'>
                <h1>Sign up</h1>
                <div className='signupline'></div>

                <div className='profilePic'>
                  <img src={profileImage} alt=''/>
                </div>

                <div className='signupInputs'>
                  <div className='theSignupInputs'>
                    <label>First Name</label>
                    <input 
                    type='text'
                    name='firstName'
                    value={userData.firstName}
                    placeholder='enter first name'
                    onChange={handleInputChange}
                    // style={formErrors.firstName ? {border: "1px solid red"} : null }
                    />
                  </div>
                  <div className='theSignupInputs'>
                    <label>Last Name</label>
                    <input 
                    type='text'
                    name='lastName'
                    value={userData.lastName}
                    placeholder='enter last name'
                    onChange={handleInputChange}
                    // style={formErrors.lastName ? {border: "1px solid red"} : null }
                    />
                  </div>
                </div>

                <div className='signupInputs'>
                  <div className='theSignupInputs'>
                    <label>Email</label>
                    <input 
                    type='text'
                    name='email'
                    value={userData.email}
                    placeholder='enter email address'
                    onChange={handleInputChange}
                    // style={formErrors.email ? {border: "1px solid red"} : null }
                    />
                  </div>
                  <div className='theSignupInputs'>
                    <label>Phone Number</label>
                    <input 
                    type='text'
                    name='phoneNumber'
                    value={userData.phoneNumber}
                    placeholder='enter phone number'
                    onChange={handleInputChange}
                    // style={formErrors.phoneNumber ? {border: "1px solid red"} : null }
                    />
                  </div>
                </div>

                <div className='signupInputs'>
                  <div className='theSignupInputs'>
                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    value={userData.password}
                    placeholder='enter password'
                    onChange={handleInputChange}
                    // style={formErrors.password ? {border: "1px solid red"} : null }
                    />
                  </div>
                  <div className='theSignupInputs'>
                    <label>Confirm Password</label>
                    <input 
                    type='password'
                    name='confirmPassword'
                    value={userData.confirmPassword}
                    placeholder='confirm the password'
                    onChange={handleInputChange}
                    // style={formErrors.confirmPassword ? {border: "1px solid red"} : null }
                    />
                  </div>
                </div>

                <div className='signupInputs'>
                  <div className='theSignupInputs'>
                    <label>Pin</label>
                    <input 
                    type='password'
                    name='pin'
                    value={userData.pin}
                    placeholder='create a security pin'
                    onChange={handleInputChange}
                    />
                  </div>
                  <div className='theSignupInputs'>
                    <label className='addImage' htmlFor='image'>Add Image</label>
                    <input type='file' id='image' hidden onChange={handleImageChange}/>
                  </div>
                </div>
                

                <button className='signupBtn' onClick={handleSignup}>Sign Up</button>

                <p>Already have an Account? <Link className='pLink' to="/">Login</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default Signup
