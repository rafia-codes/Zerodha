import React from 'react'

function RightSection({title,desc,img,link}) {
  return (
    <div className="row text-center text-col mb-5" style={{ marginLeft: "200px", marginRight: "200px" ,marginBottom:'80px'}}>
      <div className="col-4">
        <h2 className="mb-4">{title}</h2>
        <p className="mb-4">{desc}</p>
        <div className="text-start mb-5">
          {link && (
            <a href="#">
              {link} <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
      <div className="col-7">
        <img src={img} alt="" style={{ width: "560px" }} />
      </div>
    </div>
  )
}

export default RightSection;
