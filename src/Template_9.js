import React from 'react'
import { useState, useContext , useEffect } from 'react'
import { StatusContext } from './StatusContext'





export default function Template_9() {

  const {cust_detial,setCust_detial}= useContext(StatusContext) 

  return (
    <div>
      <p>感謝!</p>
     <p>Loan No. 貸款編號&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp; {cust_detial.loan_no} 已完成簽約程序,我們會盡快聯絡閣下</p>
     <p>放款時間於簽約後下一個工作天13:00前，並安排存入指定銀行戶口。 還款資料會在還款期前一個星期以信息發給各下。敬請留意。</p>
    </div>
  )
}
