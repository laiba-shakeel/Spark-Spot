import React from 'react'
import UserAccountDrawer from '../../Components/Drawer/UserAccountDrawer'
import AccountHeader from '../../Components/Header/AccountHeader'

function UserAccountLayout() {
  return (
    <div className='row m-0'>
      <div className='col-3'>
        <UserAccountDrawer />
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

export default UserAccountLayout