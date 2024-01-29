import React, { useContext, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


import "./Transfer.css"
import { Thecontext } from '../../App'  

const Deposit = () => {


    const {currentBalance, setCurrentBalance,
        accountNumber, setAccountNumber,} = useContext(Thecontext)


    const [inputValue, setInputValue] = useState({
        receiverAccountNum: "",
        amount: "",
        pin: "",
      })


    const handleInputChange =(e)=> {
        const { name, value } = e.target
        setInputValue({...inputValue, [name]: value})
        console.log(inputValue)
    }

    const data = {amount: inputValue.amount, transacPin: inputValue.pin, recieverAcctNum: inputValue.receiverAccountNum}
    const url = "https://flipcash-banking.onrender.com/api/v1/user/transfer"


    const handleTransfer = async()=>{
        try{
            const response = await axios.post(url, data, {
                headers: {
                    "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
                 }
            })

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success",
                confirmButtonText: "ok",
              })
            console.log(response)

            setCurrentBalance(response.data.checkUser.balance)

        }
        catch(err){
            console.log(err)
        }
    }



  return (
    <div className='mainBody'>
        <div className='first'>
               <div className='firstdiv'>
                    <h3>Transfer</h3>
               </div>
            </div>
        <div className='form'>
            <div className='second'>
                <div className='seconddiv'>
                    <input type="text" placeholder='Receiver Account Number' name='receiverAccountNum'  value={inputValue.receiverAccountNum} onChange={handleInputChange} />
                    <input type="text" placeholder='Enter amount' name='amount'  value={inputValue.amount} onChange={handleInputChange} />
                    <input type="password" placeholder='Enter your pin' name='pin' value={inputValue.pin} onChange={handleInputChange} />
                </div>
            </div>
            <div className='third'>
                <button onClick={handleTransfer}>Transfer</button>
            </div>
        </div>
    </div>
  )
}

export default Deposit