import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import HeaderProfile from "./HeaderProfile"
import "./layoutStyle.css"

const Layout = () => {
  return (
    <>
    
        <div className='layout'>

            <div className='menuPart'>    
                <Menu/>
            </div>
            <div className='theRightpart'>
                <HeaderProfile/>
                <Outlet/>
            </div>

        </div>
    
    </>
  )
}

export default Layout
