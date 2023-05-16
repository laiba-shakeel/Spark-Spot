
import React from 'react'
import baseColors from '../../Constant/color'
import GradientButton from '../../Components/Button/GradientButton'
import {  GifBanner5 } from '../../Assets'
import { useNavigate } from 'react-router'

import './home.css'

function SectionOneHome() {
    const navigate = useNavigate()
  return (
    <>
    <div id="home" className="d-flex justify-content-evenly" >
                <div className="row m-0 px-2 d-flex justify-content-center col-lg-11" >
                    
                        <div className="col-12 col-lg-5 d-flex  align-items-center " >
                            <div className=" row py-lg-0 py-2" >
                                <h2 className="home-section-1-heading-1" style={{color:baseColors.Dark}}>
                                    Delivering
                                    <h1 className="home-section-1-heading-2" style={{color:baseColors.Dark}}>
                                        Happiness
                                    </h1>
                                    <h5 className="home-section-1-top-text" style={{color:baseColors.Dark}}>
                                        We deliver packages from your doorsteps to your desired destinations.
                                    </h5>
                                </h2>
                                <div>
                                    <div onClick={() => navigate('/signup-as')}>
                                        <GradientButton
                                            title="Get Started"
                                            color={baseColors.white}
                                            backgroundColor1={baseColors.primaryColor}
                                            backgroundColor2={baseColors.secondaryColor}
                                            
                                        />
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                            <div className="col-12 col-lg-7 d-none d-lg-block" >
                                <div className="home-section-1-right ">
                                    <img src={GifBanner5} alt="" />
                                </div>
                            </div>
                        
                    
                </div>
            </div>
            </>
  )
}

export default SectionOneHome