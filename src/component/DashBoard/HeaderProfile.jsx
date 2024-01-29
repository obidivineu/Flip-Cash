import React from 'react'
import image from "../Img/profileImage.jpg"

const HeaderProfile = () => {
  return (
    <>
    
      <div style={{width: "100%", 
                  height: "150px",
                  backgroundColor: "#c8dce3",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  }}>
        
        <div style={{width: "6%", height: "60%",  borderRadius: "100%", marginRight: "100px"}}>
            <img src={image} alt="" style={{width: "100%", height: "100%", borderRadius: "100%", objectFit: "cover"}}/>
        </div>
        
      </div>
    
    </>
  )
}

export default HeaderProfile
