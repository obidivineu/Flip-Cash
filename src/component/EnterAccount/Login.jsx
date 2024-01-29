import React, { useContext, useState } from 'react'
import "./enteraccountStyle.css"
import { Link } from 'react-router-dom'
import loginimg from "../Img/loginimg.png"
import axios from 'axios'
import Swal from 'sweetalert2'
import { Thecontext } from '../../App'


const Login = () => {

    const {currentBalance, setCurrentBalance, accountNumber, setAccountNumber,} = useContext(Thecontext)

    const [userData, setUserData] = useState({
        email: "",
        password: "",
      })
    
      const handleInputChange = (e)=>{
        const { name, value } = e.target
        setUserData({...userData, [name]: value})
        console.log(userData)
    }

    const url ="https://flipcash-banking.onrender.com/api/v1/user/sign-in"
    const data = {identifier:userData.email, password:userData.password}


    const handleLogin = async()=>{

        try {
            const response = await axios.post(url, data)
            console.log(response)
            localStorage.setItem("currentBalance", response.data.data.balance)
            localStorage.setItem("accountNumber", response.data.data.accountNumber)
            localStorage.setItem("userToken", response.data.token)
            localStorage.setItem("firstName", response.data.data.firstName)
          localStorage.setItem("lastName", response.data.data.lastName)
          localStorage.setItem("email", response.data.data.email)
          localStorage.setItem("phoneNumber", response.data.data.phoneNumber)

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success",
                confirmButtonText: "ok",
              }).then(function() {
                     window.location.href = "/dashboard";
                  })
        } catch (error) {
            Swal.fire({
                title: "error!",
                text: error.response.data.message,
                icon: "error",
                confirmButtonText: "ok",
                }) 
            console.log(error)
        }
    }

    

  return (
    <>
    
        <div className='Login'>
            <div className='loginImg'>
                <img src={loginimg} alt=''/>
            </div>
            <div className='theLogin'>
                <h1>Login</h1>
                <div className='line'></div>

                <div className='loginInputs'>
                    <div className='theLoginInput'>
                        <label>Email or Account Number</label>
                        <input 
                        type='text'
                        name='email'
                        value={userData.email}
                        placeholder='email or account number'
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className='theLoginInput'>
                        <label>Password</label>
                        <input 
                        type='password'
                        name='password'
                        value={userData.password}
                        placeholder='password'
                        onChange={handleInputChange}
                        />
                    </div>
                </div>

                <button className='loginBtn' onClick={handleLogin}>Login</button>

                <p>Don't have an Account? <Link className='pLink' to="/signup">Sign up</Link></p>
            </div>
        </div>
    
    </>
  )
}

export default Login
