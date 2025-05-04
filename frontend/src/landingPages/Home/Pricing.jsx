import React from 'react'

function Pricing() {
  return (
    <div className='row px-5 mx-5'>
      <div className='col-5 p-5 mx-5'>
        <h1 className='fs-2 mb-5 text-col'>Unbeatable pricing</h1>
        <p className='fs-4 mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <a href="" style={{textDecoration:'none'}} className='fw-medium'>See pricing{" "}<i className="fa-solid fa-arrow-right"></i></a>
      </div>
        <div className='col-2 d-flex align-self-center px-5'>
          <img src="/assets/images/pricing0.svg" alt="" />
          <p className='align-self-center'>Free account <br />
          opening</p>
        </div> 
        <div className='col-2 d-flex align-self-center px-5'>
          <img src="/assets/images/pricing0.svg" alt="" />
          <p className='align-self-center fs-6'>Free equity delivery <br />
          and direct mutual funds</p>
        </div> 
        <div className='col-2 d-flex align-self-center px-5'>
          <img src="/assets/images/intradayTrades.svg" alt="" />
          <p className='align-self-center'>Intraday and <br />
          F&O</p>
        </div>       
    </div>
  )
}

export default Pricing
