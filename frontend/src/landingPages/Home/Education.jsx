import React from 'react'

function Education() {
  return (
    <div className='row px-5 mx-5 align-self-center'>
      <div className='col-5 p-5 mx-5'>
        <img src="/assets/images/education.svg" alt=""/>
      </div>
      <div className='col-5 p-5'>
        <h1 className='fs-2 mb-4 text-col'>Free and open market education</h1>
        <p className='text-col'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href="" style={{textDecoration:'none'}}>Varsity{" "}<i className="fa-solid fa-arrow-right"></i></a>
        <p className='text-col mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href="" style={{textDecoration:'none'}}>TradingQ&A {" "}<i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  )
}

export default Education
