import React from "react";

function Charges() {
  return (
    <div className="" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
      <h1 className="mb-3 fw-medium" style={{ fontSize: "24px" }}>
        Charges for account opening
      </h1>
      <table className="mb-5">
        <tr>
          <th>Type of account</th>
          <th>Charges</th>
        </tr>
        <tr>
          <td>Online account</td>
          <td>
            <span class="free">FREE</span>
          </td>
        </tr>
        <tr>
          <td>Offline account</td>
          <td>
            <span class="free">FREE</span>
          </td>
        </tr>
        <tr>
          <td>NRI account (offline only)</td>
          <td>₹ 500</td>
        </tr>
        <tr>
          <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
          <td>₹ 500</td>
        </tr>
      </table>

      <h1 className="mt-5 mb-3 fw-medium" style={{ fontSize: "24px" }}>
      Charges for optional value added services
      </h1>
      <table className="mb-5">
    <tr>
      <th>Service</th>
      <th>Billing Frequency</th>
      <th>Charges</th>
    </tr>
    <tr>
      <td>Tickertape</td>
      <td>Monthly / Annual</td>
      <td>Free: 0 | Pro: 249/2399</td>
    </tr>
    <tr>
      <td>Smallcase</td>
      <td>Per transaction</td>
      <td>Buy &amp; Invest More: 100 | SIP: 10</td>
    </tr>
    <tr>
      <td>Kite Connect</td>
      <td>Monthly</td>
      <td>Connect: 2000 | Historical: 2000</td>
    </tr>
  </table>
    </div>
  );
}

export default Charges;
