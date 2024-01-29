import React from 'react'
import Menu from "./Menu"
import Pages from "./HeaderProfile"

const Home = () => {

    
  return (
    <>
    
        <div style={{
            width: "100%",
            height: "100vh",
        }}>
                {/* the Menu code base component */}
                <Menu/>


                {/* the Pages code base component */}
            {/* <div style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#EDF6F9"
            }}><Pages/></div> */}
        </div>
    
    </>
  )
}

export default Home
