import React from 'react'

function Footer() {
  return (
    <div className='px-5 text-col border-top' style={{background:'#fbfbfb',paddingLeft:'10px',paddingRight:'10px'}}>
      <div className='p-5 mx-5'>
        <div className='row gap-3 px-5'>
          <div className='col'>
            <img src="/assets/images/logo.svg" alt="" style={{maxHeight:'20px'}} className='mb-3'/>
            <p className='mb-3'>© 2010 - 2025, Zerodha Broking Ltd.
              All rights reserved.</p>
              <div className='d-flex gap-4 fs-4 mb-3'>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <hr />
              <div className='d-flex gap-4 fs-4 mt-3'>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
              </div>
          </div>
          <div className='col lh-lg'>
            <p className='fs-5 fw-medium'>Company</p>
            <a href="" className='text-col'>About</a>
            <br />
            <a href="" className='text-col'>Products</a>
            <br />
            <a href="" className='text-col'>Pricing</a>
            <br />
            <a href="" className='text-col'>Referral Programme</a>
            <br />
            <a href="" className='text-col'>Careers</a>
            <br />
            <a href="" className='text-col'>Zerodha.tech</a>
            <br />
            <a href="" className='text-col'>Open Source</a>
            <br />
            <a href="" className='text-col'>Press & Media</a>
            <br />
            <a href="" className='text-col'>Zerodha Cares (CSR)</a>
          </div>
          <div className='col lh-lg'>
            <p className='fs-5 fw-medium'>Support</p>
            <a href="" className='text-col'>Contact us</a>
            <br />
            <a href="" className='text-col'>Support portal</a>
            <br />
            <a href="" className='text-col'>Z-Connect blog</a>
            <br />
            <a href="" className='text-col'>List of charges</a>
            <br />
            <a href="" className='text-col'>Downloads & resources</a>
            <br />
            <a href="" className='text-col'>Videos</a>
            <br />
            <a href="" className='text-col'>Market overview</a>
            <br />
            <a href="" className='text-col'>How to file a complaint?</a>
            <br />
            <a href="" className='text-col'>Status of your complaints</a>
          </div>
          <div className='col lh-lg'>
            <p className='fs-5 fw-medium'>Account</p>
            <a href="" className='text-col'>Open an account</a>
            <br />
            <a href="" className='text-col'>Fund transfer</a>
            <br /></div>
        </div>
        <div className='px-5 mt-5' style={{fontSize:'12px',color:'gray'}}>
          <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p><a href="">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here.</a></p>
        </div>
        <div className='d-flex gap-4 px-5' style={{fontSize:'14px',color:'gray',justifySelf:'center'}}>
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & conditions </p>
          <p>Policies & procedures</p>
          <p>Privacy policy </p>
          <p>Disclosure </p>
          <p>For investor's attention</p>
          <p>Investor charter</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
