import React from 'react'
import { SupportHand } from '../../Assets'
import './style.css'

const SectionSixHome = () => {
  return (
    <section className="py-5">
    <div className="container contAreaSec">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-8 contentArea d-flex justify-content-center flex-column">
          <h2 className='ps-3'>We support You</h2>
          <p className='ps-3'>
           
        We are taking action to help our freelancers, our clients, and the people of all around the world so can you.
      
          </p>
        </div>
        <div className="col-lg-3 col-md-3 col-4">
          <img src={SupportHand} alt="" className="img-fluid fluid d-block mx-auto "/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionSixHome