import React from 'react'
import UserAccountLayout from '../../../Layouts/UserAccountLayout'
import { Banner1 } from '../../../Assets'

function UserSupport() {
  return (
    <UserAccountLayout title="Support" >
      <div className="row  m-0 d-flex justify-content-center align-items-start ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img alt="" src={Banner1} style={{ height: "60vh",  }} />
        </div>
      </div>
    </UserAccountLayout>
  )
}

export default UserSupport