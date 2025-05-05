import React from "react";

function Universe() {
  return (
    <div
      className="text-center"
      style={{ paddingLeft: "200px", paddingRight: "200px" }}
    >
      <h2 className="mb-4">The Zerodha Universe</h2>
      <h6 className="fw-medium mb-5" style={{ color: "gray" }}>
        Extend your trading and investment experience even further with our
        partner platforms
      </h6>
      <div className="row mb-5">
        <div className="col">
          <img
            className="mb-4"
            src="/assets/images/fund.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            className="mb-4"
            src="/assets/images/sensibullLogo.svg"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img
            className="mb-4"
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <img
            className="mb-4"
            src="/assets/images/streakLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img
            className="mb-4"
            src="/assets/images/smallcaseLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img
            className="mb-4"
            src="/assets/images/dittoLogo.png"
            alt=""
            style={{ height: "55px" }}
          />
          <p style={{color:'gray'}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button className='btn btn-primary fs-5 py-1 px-4 mt-6 mb-5'>Sign up for free</button>
    </div>
  );
}

export default Universe;
