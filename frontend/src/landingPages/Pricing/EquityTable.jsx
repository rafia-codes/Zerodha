import React from 'react'

function EquityTable() {
  return (
    <div style={{paddingLeft:'200px',paddingRight:'200px',marginBottom:'70px'}}>
      <table>
    <thead>
      <tr>
        <th> </th>
        <th>Equity Delivery</th>
        <th>Equity Intraday</th>
        <th>F&O - Futures</th>
        <th>F&O - Options</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Brokerage</th>
        <td>Zero Brokerage</td>
        <td>0.03% or Rs. 20/executed order whichever is lower</td>
        <td>0.03% or Rs. 20/executed order whichever is lower</td>
        <td>Flat Rs. 20 per executed order</td>
      </tr>
      <tr>
        <th>STT/CTT</th>
        <td>0.1% on buy &amp; sell</td>
        <td>0.025% on the sell side</td>
        <td>0.02% on the sell side</td>
        <td>
          • 0.125% of the intrinsic value on options that are bought and exercised<br/>
          • 0.01% on sell side (on premium)
        </td>
      </tr>
      <tr>
        <th>Transaction Charges</th>
        <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
        <td>NSE: 0.00297%<br/>BSE: 0.00375%</td>
        <td>NSE: 0.00173%<br/>BSE: 0</td>
        <td>NSE: 0.05303% (on premium)<br/>BSE: 0.0325% (on premium)</td>
      </tr>
      <tr>
        <th>GST</th>
        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
      </tr>
      <tr>
        <th>SEBI Charges</th>
        <td>₹10 / crore</td>
        <td>₹10 / crore</td>
        <td>₹10 / crore</td>
        <td>₹10 / crore</td>
      </tr>
      <tr>
        <th>Stamp Charges</th>
        <td>0.015% or ₹1500 / crore on buy side</td>
        <td>0.003% or ₹300 / crore on buy side</td>
        <td>0.002% or ₹200 / crore on buy side</td>
        <td>0.003% or ₹300 / crore on buy side</td>
      </tr>
    </tbody>
  </table>

    </div>
  )
}

export default EquityTable
