import React from 'react'
import AccountHeader from '../../Components/Header/AccountHeader'
import ClientAccountDrawer from '../../Components/Drawer/ClientAccountDrawer'
import baseColors from '../../Constant/color'


function ClientAccountLayout({children, title}) {
  return (
    <div className='row m-0 ' style={{height: "100vh", background: `linear-gradient(to left, #fcdede 0%, #ece0fc  100%)`
  }}>
    <div className='col-12 p-0 m-0 d-flex justify-content-center flex-column shadow-sm' style={{height: "12vh", background: baseColors.white, }}>
     <AccountHeader />
     </div>
      <div className='col-3 col-xl-2 p-0 me-2 shadow-sm' style={{background: baseColors.white,}}>
        <ClientAccountDrawer />
      </div>
      <div className='col shadow-sm' style={{background: baseColors.white,}}>
        <div className='row'>
        <div className='col-12'>
        <div className='row px-3 py-1' style={{ height:"80vh"}}>
      <h5 className='p-0 py-1'>{title}</h5>
      <div className='row d-flex justify-content-start align-items-start m-0 py-3' style={{height:"70vh"}}>
        {children}
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ClientAccountLayout