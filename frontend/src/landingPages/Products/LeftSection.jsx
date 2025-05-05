import React from "react";

function LeftSection({ title, desc, link1, link2, img }) {
  return (
    <div
      className="row text-center text-col mb-5"
      style={{ marginLeft: "200px", marginRight: "200px" ,marginBottom:'80px'}}
    >
      <div className="col-7">
        <img src={img} alt="" style={{ width: "560px" }} />
      </div>
      <div className="col-4">
        <h2 className="mb-4">{title}</h2>
        <p className="mb-4">{desc}</p>
        <div className="row text-start mb-5">
          {link1 && (
            <a href="#" className="col">
              {link1} <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
          {link2 && (
            <a href="#" className="col">
              {link2} <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
        <div className="row text-start mb-4">
          <div className="col">
            <img src="/assets/images/google.svg" alt="" />
          </div>
          <div className="col">
            <img src="/assets/images/apple.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
