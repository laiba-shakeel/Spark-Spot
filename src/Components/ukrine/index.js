import React from 'react'
import { img1 } from '../../Assets'
import style from './style.css'
const Section = () => {
  return (
    <section className="py-5">
    <div className="container py-5 contAreaSec">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-8 contentArea">
          <h2 className='ps-3'>        We support You</h2>
          <p className='ps-3'>
           
        We are taking action to help our freelancers, our clients, and the people of all around the world so can you.
      
          </p>
        </div>
        <div className="col-lg-3 col-md-3 col-4">
          <img src={img1} alt="" className="img-fluid fluid d-block mx-auto"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section