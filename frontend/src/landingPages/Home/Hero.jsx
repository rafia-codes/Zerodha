import React from 'react'

function Hero() {
  return (
    <div className="row mb-5">
      <div className='text-center'>
        <img src="/assets/images/homeHero.png" alt="" style={{maxHeight:'406px',marginTop:'50px',marginBottom:'25px'}}/>
        <h1 className='text-col mt-2'>Invest in everything</h1>
        <p className='text-col mt-3 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary fs-5 py-1 px-4 mt-6 mb-5'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero;
