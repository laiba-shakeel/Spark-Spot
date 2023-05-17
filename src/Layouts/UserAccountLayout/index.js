import React from 'react'
import AccountHeader from '../../Components/Header/AccountHeader'
import UserAccountDrawer from '../../Components/Drawer/UserAccountDrawer'
import baseColors from '../../Constant/color'


function UserAccountLayout({children, title}) {
  return (
    <div className='row m-0 ' style={{height: "100vh", background: `linear-gradient(to left, #fcdede 0%, #ece0fc  100%)`
  }}>
    <div className='col-12 p-0 m-0 d-flex justify-content-center flex-column shadow-sm' style={{height: "10vh", background: baseColors.white}}>
     <AccountHeader />
     </div>
      <div className='col-2 col-md-3 col-xl-2 p-3 me-2 shadow-sm' style={{ background: baseColors.white,}} >
        <UserAccountDrawer />
      </div>
      <div className='col shadow-sm' style={{}}>
        <div className='row'>
        <div className='col-12'>
        <div className='row ps-3 pt-3' style={{ height:"88vh", background: baseColors.white,}}>
      <h3 className='p-0 py-1' style={{color:baseColors.Dark}}>{title}</h3>
      <div className='row d-flex justify-content-start align-items-start m-0 ' style={{height:"70vh", }}>
        {children}
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UserAccountLayout