import React from "react";

function Hero() {
  return (
    <section className="row bg-primary text-white" id="supportHero" style={{paddingLeft:'200px',paddingRight:'200px',paddingTop:'80px'}}>
      <div className="col-6 fw-medium  lh-lg">
        <h4 className="mb-5">Search for an answer or browse help topics to create a ticket</h4>
        <input type="text" placeholder="Eg. how do i activate F & O, why is my order getting rejected..."/>
      </div>
    </section>
  );
}

export default Hero;
