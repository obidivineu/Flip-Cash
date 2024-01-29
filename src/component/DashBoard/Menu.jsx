import React from 'react'
import "./menuStyle.css"
import logo from "../Img/FlipCash logo.png"
import dashboardimg from "../Img/dashboardlogo.png"
import accountimg from "../Img/accountlogo.png"
import depositimg from "../Img/depositlogo.png"
import transferimg from "../Img/transferlogo.png"
import withdrawimg from "../Img/withdrawlogo.png"
import paybillsimg from '../Img/paybillslogo.png'
import historyimg from "../Img/historylogo.png"
import notificationimg from "../Img/notificationlogo.png"
import logoutimg from "../Img/logoutlogo.png"
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'


const Menu = () => {


  const logOutUrl = "https://flipcash-banking.onrender.com/api/v1/user/sign-out"

  const handleLogout = ()=>{

    // try{
    //   const response = await axios.post(logOutUrl, {
    //     headers: {
    //       "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
    //     }
    //   })
    //   console.log(response)
    // }
    // catch(err){
    //   console.log(err);
    // }
    localStorage.removeItem("userToken")
    localStorage.removeItem("email")
    localStorage.removeItem("phoneNumber")
    localStorage.removeItem("firstName")
    localStorage.removeItem("accountNumber")
    localStorage.removeItem("lastName")
    localStorage.removeItem("currentBalance")
    localStorage.removeItem("type")
    localStorage.removeItem("amount")
    localStorage.removeItem("receiver")
    localStorage.removeItem("sender")
  }

  return (
    <>

        <div className='menu'>
            <div className='bankLogo'>
              <div className='logoImg'>
                <img src={logo} alt=''/>
              </div>
            </div>

            <div className='theMenus'>

              <NavLink to= "/dashboard" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={dashboardimg} alt=''/></div>
                <h5>Dashboard</h5>
              </NavLink>

              <NavLink to= "/account"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={accountimg} alt=''/></div>
                <h5>Account</h5>
              </NavLink>

              <NavLink to= "/deposit" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={depositimg} alt=''/></div>
                <h5>Deposit</h5>
              </NavLink>

              <NavLink to= "/transfer"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={transferimg} alt=''/></div>
                <h5>Transfer</h5>
              </NavLink>

              <NavLink to= "/withdraw" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={withdrawimg} alt=''/></div>
                <h5>Withdraw</h5>
              </NavLink>

              <NavLink to= "/paybills" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={paybillsimg} alt=''/></div>
                <h5>Pay Bills</h5>
              </NavLink>

              <NavLink to= "/history" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={historyimg} alt=''/></div>
                <h5>History</h5>
              </NavLink>

              <NavLink to= "/notification" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <div className='menuTitleImg'><img src={notificationimg} alt=''/></div>
                <h5>Notification</h5>
              </NavLink>

            </div>

            <div className='theEnd'>
              <div className='notactive'>
                <div className='menuTitleImg'><img src={logoutimg} alt=''/></div>
                <h5><Link  to = "/" className='profileLogout' onClick={handleLogout}>Log out</Link></h5>
              </div>

            </div>
        </div>
    
    </>
  )
}

export default Menu
