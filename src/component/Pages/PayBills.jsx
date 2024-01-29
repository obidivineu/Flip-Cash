import React, { useContext } from 'react'
import './payBills Style.css'
import Betting from "./Betting"
import { Thecontext } from '../../App'
import bettingIcon from "../Img/bettingIcon.png"
import dataIcon from "../Img/dataIcon.png"
import airtimeIcon from "../Img/airtimeIcon.png"
import electricityIcon from "../Img/electricityIcon.png"


const Bills = () => {

  const {betting, setBetting, electricity, setElectricity} = useContext(Thecontext)
  

  const handleShowBetting = ()=>{
    setBetting(true)
    setElectricity(false)
  }

  const handleShowElectricity = ()=>{
    setBetting(false)
    setElectricity(true)
  }

  return (
    <div className='billsCon'>
      <div className="top">
        <h4>pay bills</h4>
      </div>

      <div className="bottom">
        <div className="bottomUp">
          <div className="box1" onClick={handleShowBetting}>
            <div className="image">
              <img src={bettingIcon} alt="" />
            </div>
            <p>Betting</p>
          </div>

          <div className="box2">
            <div className="image">
              <img src={dataIcon} alt="" />
            </div>
            <p>Data</p>
          </div>

          <div className="box3">
            <div className="image">
              <img src={airtimeIcon} alt="" />
            </div>
            <p>Airtime</p>
          </div>

          <div className="box4" onClick={handleShowElectricity}>
            <div className="image">
              <img src={electricityIcon} alt="" />
            </div>
            <p>Electricity</p>
          </div>
        </div>

        {
          electricity ? 
          <div className="bottomDown">
            <div className="inputsCon">
              <select name="Select Biller" id="">
                <option value="">Select Biller</option>
                <option value="">Eko Electricity Prepaid</option>
                <option value="">Benin Electricity Postpaid</option>
                <option value="">Abuja Electricity Prepaid</option>
              </select>
              <input type="text" placeholder='Enter Meter Number'/>
              <input type="text" placeholder='Enter Amount'/>
              <input type="text" placeholder='Enter pin'/>
            </div>
            <button>Pay</button>
          </div>  : null
        }


       {
       betting ?  <Betting/> : null
      }

      </div>
    </div>
  )
}

export default Bills
