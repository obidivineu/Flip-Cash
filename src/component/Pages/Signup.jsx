import React, { useContext, useState } from 'react'
import "./style.css"
import axios from "axios"
import { Thecontext } from '../../App'

const Signup = () => {

    const { loading, setLoading } = useContext(Thecontext)


    const [data, setData] = useState({
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
        setData({...data, [name]: value})
        // console.log(data)
    }

    const theData = {firstname:data.firstName, lastname: data.lastName, phoneNumber: data.phoneNumber, email: data.email, userPassword: data.password, confirmPassword: data.confirmPassword, transactionPin: data.pin}
    const url = "https://flipcash-banking.onrender.com/api/v1/user/sign-up"

    const handleSignup = async()=>{
        try{
            setLoading(true)
            const response = await axios.post(url, theData)
            setLoading(false)
            console.log(response)
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <>
   
        <div className='signup'>
            <input type='text' name='firstName' value={data.firstName} placeholder='First name' onChange={handleInputChange} style={{color: "black"}}/>
            <input type='text' name="lastName" value={data.lastName} placeholder='Last name'onChange={handleInputChange}/>
            <input type='email'name='email' value={data.email} placeholder='email' onChange={handleInputChange}/>
            <input type='text' name="phoneNumber" value={data.phoneNumber} placeholder='Phone Number' onChange={handleInputChange}/>
            <input type='password'  name="password" value={data.password} placeholder='Password' onChange={handleInputChange}/>
            <input type='password' name="confirmPassword" value={data.confirmPassword} placeholder='Confirm Password' onChange={handleInputChange}/>
            <input type='password' name="pin" value={data.pin} placeholder='Pin' onChange={handleInputChange}/>
            <button onClick={handleSignup}>Signup</button>
            </div>

            {
             loading ?  <div>Loading...</div> : null
            }
      

    </>
  )
}

export default Signup