import React from 'react'

function Trust() {
  return (
    <>
    <div className='row px-5 mx-5 mb-5'>
        <div className='col-5 p-5 mx-5'>
          <h1 className='fs-2 mb-5 text-col'>Trust with confidence</h1>
          <h2 className='fs-4 text-col'>Customer-first always</h2>
          <p className='text-col lh-lg mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h2 className='fs-4 text-col'>No spam or gimmicks</h2>
          <p className='text-col lh-lg mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you.<a href="" style={{textDecoration:'none'}}>Our philosophies.</a></p>
          <h2 className='fs-4 text-col'>The Zerodha universe</h2>
          <p className='text-col lh-lg mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className='fs-4 text-col'>Do better with money</h2>
          <p className='text-col lh-lg mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6 text-center p-5'>
          <img src="/assets/images/ecosystem.png" alt="" style={{width:'90%'}}/>
          <div className='d-flex justify-content-around'>
            <a href="" style={{textDecoration:'none'}}>Explore our products{" "}<i className="fa-solid fa-arrow-right"></i></a>
            <a href="" style={{textDecoration:'none'}}>Try Kite demo{" "}<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className='text-center mb-5'>
          <img src="/assets/images/pressLogos.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Trust
