import React from 'react'
import UserAccountLayout from '../../../Layouts/UserAccountLayout'
import { OrderList } from '../../../Assets'

function UserTask() {
  return (
    <UserAccountLayout title="Task">
      <img src={OrderList}  style={{width:"90%",height:"60vh", padding:0}}/>
    </UserAccountLayout>
  )
}

export default UserTask