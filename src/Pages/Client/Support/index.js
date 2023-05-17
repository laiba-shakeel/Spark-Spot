import React from 'react'
import ClientAccountLayout from '../../../Layouts/ClientAccountLayout'
import { Banner1 } from '../../../Assets'

function ClientSupport() {
  return (
    <ClientAccountLayout title="Support" >
      <div className="row  m-0 d-flex justify-content-center align-items-start ">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <img alt="" src={Banner1} style={{ height: "60vh",  }} />
        </div>
      </div>
    </ClientAccountLayout>
  )
}

export default ClientSupport