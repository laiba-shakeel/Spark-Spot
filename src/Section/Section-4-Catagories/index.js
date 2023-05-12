import React from 'react'
import './style.css'
// import bg from '../../Assets/bg-grad.jpg' 
import {Sec41 , Sec42, Sec43 , Sec45 , sec56, Sec8} from "../../Assets/index"
const SectionFourCatagory = () => {
  const [selected, setSelected] = React.useState(Sec43)
  return (
    <div className='container MainDiv' >
    <div className='row d-flex justify-content-center m-0'>
      <div className='col-md-3 d-flex flex-column justify-content-around'>
           <div className='row'>
           <p className='fonts' onClick={() => setSelected(Sec41)}>Mobile App Development</p>
            <p className='fonts' onClick={() => setSelected(Sec8)}>Shopify Development</p>
            <p className='fonts' onClick={() => setSelected(Sec43)}>Wordpress Development</p>
            <p className='fonts' onClick={() => setSelected(Sec45)}>Data Visualization</p>
            <p className='fonts' onClick={() => setSelected(Sec45)}>Machine Learning</p>
            <p className='fonts' onClick={() => setSelected(sec56)}>CyberSecurity & Data Protection</p>
           </div>
<div className='row'> abc</div>
          </div>
      <div className="col-md-9"
      >
        <img
          src={selected}
          style={{
            width: "100%",
            height:"40vh",
            backgroundSize: "contain",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        />
      </div>
    </div>
    </div> 
  )
}

export default SectionFourCatagory
