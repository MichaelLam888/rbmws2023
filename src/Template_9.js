import React from 'react'
import { useState, useContext , useEffect } from 'react'
import { StatusContext } from './StatusContext'





export default function Template_9() {

  const {cust_detial,setCust_detial}= useContext(StatusContext) 

  return (
    <div>
      <p>感謝!</p>
     <p>Loan No. 貸款編號&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp; {cust_detial.loan_no} 已完成簽約程序,我們會盡快聯絡閣下</p>
    </div>
  )
}
