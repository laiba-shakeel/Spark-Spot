import React from 'react'
import AccountHeader from '../../Components/Header/AccountHeader'
import ClientAccountDrawer from '../../Components/Drawer/ClientAccountDrawer'


function ClientAccountLayout() {
  return (
    <div className='row m-0'>
      <div className='col-3'>
        <ClientAccountDrawer />
      </div>
      <div className='col-9'>
        <div className='row'>
        <div className='col-12'>
          <AccountHeader />
        </div>
        <div className='col-12'>
          account layout
        </div>
        </div>
      </div>
    </div>
  )
}

export default ClientAccountLayout