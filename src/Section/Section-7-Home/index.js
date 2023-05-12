import React from 'react'
import { SupportHand } from '../../Assets'
import './style.css'

const SectionSevenHome = () => {
  return (
    <section className="p-3">
   
    <div className=" container contAreaSec">
      <div className="row">
        <div className="col-6 col-md-9 col-lg-9  px-0 contentArea d-flex justify-content-center flex-column">
          <h2 className='ps-3 mb7'>We support You</h2>
          <p className='ps-3 mb8'>
           
        We are taking action to help our freelancers, our clients, and the people of all around the world so can you.
      
          </p>
        </div>
        <div className="col-6  col-md-3  col-lg-3 ">
          <img src={SupportHand} alt="" className="img-fluid fluid d-block mx-auto " style={{height:"100%", width:"260px", backgroundSize:"cover",borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",}}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionSevenHome