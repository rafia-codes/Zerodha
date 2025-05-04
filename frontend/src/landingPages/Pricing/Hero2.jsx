import React from 'react'

function Hero2() {
  return (
    <div className='row gap-3 text-center text-col' style={{paddingTop:'40px', paddingBottom:'40px', paddingLeft:'120px', paddingRight:'120px'}}>
       <div className='col'>
        <img src="/assets/images/pricing0.svg" alt="" style={{width:'250px'}}/>
        <h1 className='fs-2 mb-3'>Free equity delivery</h1>
        <p className='fs-5' style={{color:'gray'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div> 
        <div className='col'>
        <img src="/assets/images/intradayTrades.svg" alt="" style={{width:'250px'}}/>
        <h1 className='fs-2 mb-3'>Intraday and F&O trades</h1>
        <p className='fs-5' style={{color:'gray'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div> 
        <div className='col'>
        <img src="/assets/images/pricing0.svg" alt="" style={{width:'250px'}}/>
        <h1 className='fs-2 mb-3'>Free direct MF</h1>
        <p className='fs-5' style={{color:'gray'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>  
    </div>
  )
}

export default Hero2
