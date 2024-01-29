import React, { useContext, useEffect, useState } from 'react'
import "./dashboardStyle.css"
import { Link } from 'react-router-dom'
import { Thecontext } from '../../App'
import axios from 'axios'

const Dashboard = () => {

  const {currentBalance, setCurrentBalance,
        accountNumber, setAccountNumber,} = useContext(Thecontext)



  const getAllHistory = "https://flipcash-banking.onrender.com/api/v1/user/getallmyhistory"

  const [type, setType] = useState(localStorage.getItem("type") || [])
  const [amount, setAmount] = useState(localStorage.getItem("amount") || [])
  const [receiver, setReceiver] = useState(localStorage.getItem("receiver") ||[])
  const [sender, setSender] = useState(localStorage.getItem("sender") ||[])
  const [date, setDate] = useState(localStorage.getItem("date") ||  [])
  


        useEffect(()=>{
          async function fetchHistory(){
            try {
                  const response = await axios.get(getAllHistory, {
                    headers: {
                      "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
                   }
                  })
                  console.log(response)
                  localStorage.setItem("type", response.data.transactionHistory[0].type)
                  localStorage.setItem("amount", response.data.transactionHistory[0].amount)
                  localStorage.setItem("receiver", response.data.transactionHistory[0].reciever)
                  localStorage.setItem("sender", response.data.transactionHistory[0].sender)
                  localStorage.setItem("date", response.data.transactionHistory[0].createdAt.toDateString())
    
              }
              catch(err){
                console.log(err)
              }      
        }
        fetchHistory()
        },[])

       


  return (
    <div className='dashBoard'>
        <div className='dashboardTop'>
            <div className='currentBalance'>
              <div className='theCurrentBal'>Current Balance</div>
              <h3>₦{localStorage.getItem("currentBalance")}</h3>
            </div>
            <div className='accountNumber'>
              <div className='theAccountNumber'>Account Number</div>
              <h3>{localStorage.getItem('accountNumber')}</h3>
            </div>
        </div>

        <div className='dashboardPayment'>
            <div className='dashboardBtn'><Link  className="link" to= "/withdraw" >Withdraw</Link></div>
            <div className='dashboardBtn'><Link  className="link" to= "/transfer" >Transfer</Link></div>
            <div className='dashboardBtn'><Link  className="link" to= "/deposit" >Deposit</Link></div>
        </div>

        <div className='transactionHistory'>
            <h5>Transaction History</h5>
            <div className='transactionHistoryDivider'></div>
            <div className='taransactionHistoryArea'>
              <div className='statusArea'>
                <div className='transactOptions'>Type</div>
                <div className='theTransactionsStatus'>
                  {/* <div className='circle'></div> */}
                  <p>{type}</p>
                </div>
              </div>
              
              <div className='nameArea'>
                <div className='transactOptions'>Receiver</div>
                <div className='theTransactionsName'>
                  <p>{receiver}</p>
                </div>
              </div>

              <div className='nameArea'>
                <div className='transactOptions'>Sender</div>
                <div className='theTransactionsName'>
                  <p>{sender}</p>
                </div>
              </div>

              <div className='amountArea'>
                <div className='transactOptions'>Amount</div>
                <div className='theTransactionsAmount'>
                  <p>₦{amount}</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard