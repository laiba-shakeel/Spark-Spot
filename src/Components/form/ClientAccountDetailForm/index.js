import React from 'react'
import './style.css'
import { DummyPerson } from '../../../Assets'
import GradientButton from '../../Button/GradientButton'
import baseColors from '../../../Constant/color'
import InputField from '../../InputField'


const ClientAccountDetailForm = () => {
  return (
    <div>
      <div className="container px-4 mt-4">
    <div className="row">
        <div className="col-xl-4">
          
            <div className="card mb-4 mb-xl-0">
                <div className="card-header py-0">Profile Picture</div>
                <div className="card-body text-center">
                    <img className="img-account-profile rounded-circle mb-2" src={DummyPerson} alt='' style={{width:"15vw", height:"18vh"}}/>
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <GradientButton variant="primary"
            title="Upload your image"
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          />
                </div>
            </div>
        </div>
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header py-0">Account Details</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="small mb-1" >Username (how your name will appear to other users on the site)</label>
                            <InputField type="text" placeholder="Enter your username" />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <InputField type="text" placeholder="Enter your first name" />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <InputField type="text" placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputOrgName">Organization name</label>
                                <InputField type="text" placeholder="Enter your organization name" />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLocation">Location</label>
                                <InputField type="text" placeholder="Enter your location" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <InputField type="email" placeholder="Enter your email address" />
                        </div>
                    
                        <div className="row gx-3 mb-3">
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <InputField type="tel" placeholder="Enter your phone number" />
                            </div>
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputBirthday">Birthday</label>
                                <InputField type="text" name="birthday" placeholder="Enter your birthday" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ClientAccountDetailForm

