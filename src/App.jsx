import React, { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/EnterAccount/Login"
import Signup from "./component/EnterAccount/Signup"
import Layout from "./component/DashBoard/Layout"
import Dashboard from "./component/Pages/Dashboard"
import Deposit from "./component/Pages/Deposit"
import PayBills from "./component/Pages/PayBills"
import Transfer from "./component/Pages/Transfer"
import Withdraw from "./component/Pages/Withdraw"
import Notification from "./component/Pages/Notification"
import Account from "./component/Pages/Account"
import History from "./component/Pages/History"



export const Thecontext = createContext()

const App = () => {

  const [betting, setBetting] = useState(false) 
  const [electricity, setElectricity] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentBalance, setCurrentBalance] = useState(localStorage.getItem("currentBalance"))
  const [accountNumber, setAccountNumber] = useState(false)
  const [firstName, setFirstName] = useState(false)
  const [lastName, setLastName] = useState(false)
  const [email, setEmail] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(false)


  return (
    <>
        <Thecontext.Provider value={{
          betting, setBetting,
          electricity, setElectricity,
          loading, setLoading,
          currentBalance, setCurrentBalance,
          accountNumber, setAccountNumber,
          firstName, setFirstName,
          lastName, setLastName,
          email, setEmail,
          phoneNumber, setPhoneNumber,
        }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element= { <Login/> }/>
              <Route path='/signup' element= { <Signup/> }/>

              <Route  element= { <Layout/> }>
                <Route path='/dashboard' element= { <Dashboard/> }/>
                <Route path='/deposit' element= { <Deposit/> }/>
                <Route path='/paybills' element= { <PayBills/> }/>
                <Route path='/transfer' element= { <Transfer/> }/>
                <Route path='/withdraw' element= { <Withdraw/> }/>
                <Route path='/notification' element= { <Notification/> }/>
                <Route path='/account' element= { <Account/> }/>
                <Route path='/history' element= { <History/> }/>
              </Route>
            </Routes>
          </BrowserRouter>
        </Thecontext.Provider>
    </>
  )
}

export default App
