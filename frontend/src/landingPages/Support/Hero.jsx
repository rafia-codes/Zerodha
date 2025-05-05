import React from "react";

function Hero() {
  return (
    <div
      className="row bg-primary text-white mb-5"
      id="supportHero"
      style={{
        paddingLeft: "200px",
        paddingRight: "200px",
        paddingTop: "80px",
        paddingBottom:'80px'
      }}
    >
      <div className="col-7 fw-medium lh-lg">
        <h4 className="mb-5">
          Search for an answer or browse help topics to create a ticket
        </h4>
        <input
          type="text"
          style={{ width: "100%" }}
          placeholder="Eg. how do i activate F & O, why is my order getting rejected..."
          className="py-3 px-3 mb-4"
        />
        <a href="#" className="border-bottom text-white m-3 pb-2">Track account opening</a>
        <a href="#" className="border-bottom text-white m-3 pb-2">Track segment activation</a>
        <a href="#" className="border-bottom text-white m-3 pb-2">Intraday margins</a><br />
        <a href="#" className="border-bottom text-white m-3 pb-2">Kite user manual</a>
      </div>
      <div className="col-4 align-self-center">
        <h4>Featured</h4>
        <ol>
            <li><a href="" className="text-white link-underline-light">Adjustment of F&O contracts of OFSS due to dividend</a></li>
            <li><a href="" className="text-white link-underline-light">Surveillance measure on scrips - May 2025</a></li>
        </ol>
      </div>
    </div>
  );
}

export default Hero;
