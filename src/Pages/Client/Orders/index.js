import React from 'react'
import ClientAccountLayout from '../../../Layouts/ClientAccountLayout'
import { OrderList } from '../../../Assets'

function ClientOrders() {
  return (
    <ClientAccountLayout title="Order">
      <img src={OrderList}  style={{width:"90%",height:"60vh", padding:0}}/>
    </ClientAccountLayout>
  )
}

export default ClientOrders