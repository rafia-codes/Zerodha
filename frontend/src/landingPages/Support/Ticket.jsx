import React from 'react'

function Ticket() {
  return (
    <div className='my-5' style={{paddingLeft:'200px',paddingRight:'200px'}}>
      <h4 className='mb-5 fw-medium' style={{color:'gray'}}>To create a ticket, select a relevant topic</h4>
      <div className='row mb-5'>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-plus" style={{paddingRight:'5px'}}></i>Account Opening</h4>
            <li><a href="#">Resident individual</a></li>
            <li><a href="#">Minor</a></li>
            <li><a href="#">Non Resident Indian (NRI)</a></li>
            <li><a href="#">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#">Glossary</a></li>
            </ul>
        </div>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-user" style={{paddingRight:'5px'}}></i> Your Zerodha Account</h4>
            <li><a href="#">Your Profile</a></li>
            <li><a href="#">Account modification</a></li>
            <li><a href="#">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a href="#">Nomination</a></li>
            <li><a href="#">Glossary</a></li>
            <li><a href="#">Transfer and conversion of securities</a></li>
            </ul>
        </div>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-chart-simple" style={{paddingRight:'5px'}}></i>Kite</h4>
            <li><a href="#">IPO</a></li>
            <li><a href="#">Trading FAQs</a></li>
            <li><a href="#">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="#">Charts and orders</a></li>
            <li><a href="#">Alerts and Nudges</a></li>
            <li><a href="#">General</a></li>
            </ul>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-folder" style={{paddingRight:'5px'}}></i>Funds</h4>
            <li><a href="#">Add money</a></li>
            <li><a href="#">Withdraw money</a></li>
            <li><a href="#">Add bank accounts</a></li>
            <li><a href="#">eMandates</a></li>
            </ul>
        </div>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-circle-notch" style={{paddingRight:'5px'}}></i> Console</h4>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Corporate actions</a></li>
            <li><a href="#">Funds statement</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Segments</a></li>
            </ul>
        </div>
        <div className='col'>
            <ul><h4 className='my-4'><i class="fa-solid fa-coins" style={{paddingRight:'5px'}}></i>Coins</h4>
            <li><a href="#">Understanding mutual funds and Coin</a></li>
            <li><a href="#">Coin app</a></li>
            <li><a href="#">Coin web</a></li>
            <li><a href="#">Transactions and reports</a></li>
            <li><a href="#">National Pension Scheme (NPS)</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Ticket
