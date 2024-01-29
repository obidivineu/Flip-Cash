import React from 'react'
import './Betting.css'

const Betting = () => {


  const bettingUrl = "https://flipcash-banking.onrender.com/api/v1/all-bets"

  const handleBettingtype = ()=>{
    
  }

  return (

   <div className="bettingBody">
    <div className="bettingCon">
      <div className="bettingInputsCon">
        <select name="Select Biller" id="">
          <option value="" onChange={handleBettingtype}>Select Provider</option>
          <option value="">SportyBet</option>
          <option value="">Bet9ja</option>
          <option value="">BetKing</option>
          <option value="">1XBet</option>
        </select>
        <input type="text" placeholder='Enter User ID'/>
        <input type="text" placeholder='Enter Amount'/>
        <input type="text" placeholder='Enter pin'/>
      </div>
      <button>Pay</button>
    </div>
  </div>
  )
}

export default Betting
