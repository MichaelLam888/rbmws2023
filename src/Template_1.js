import React from 'react'
import { useState, useContext , useEffect } from 'react'
import { StatusContext } from './StatusContext'
import { UserContext } from './context/UserContext'

import Loan_01 from './Loan_01'
import './css/Step.css';

export default function Template_1() {
    



  const {step_status,setStepStatus}= useContext(StatusContext)  
  const {user,userInfo} = useContext(UserContext);
  const {cust_detial,setCust_detial}= useContext(StatusContext)  

  const [isSubscribed, setIsSubscribed] = useState(false);
  const {isLoaded,setIsLoaded}= useContext(StatusContext)  


//console.log (isLoaded)
  

    const handleClick2 = ()=>{
      setStepStatus(2)
      //console.log(step_status)
    }

    const handleClickBack2 = ()=>{
      setStepStatus(0)
      //console.log(step_status)
    }

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

 const handleChange = event => {
    /*
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    */
    setIsSubscribed(current => !current);
  };
  
console.log (cust_detial.load )
    return (
<>
      {cust_detial.load ==null  &&  <div>
        <p><img width="30%" src={process.env.PUBLIC_URL+"images/loading.gif"} /></p>
        加載中.請稍等</div>}
        
      {cust_detial.load == 3 &&  <div>FAIL!</div>}

      {cust_detial.load == 1 &&  

  
<div>
  
  <div className='loan_agree'>
  <h2>Loan Agreement 貸款合約{isLoaded}</h2>
  <p className='title'>Loan No. 貸款號碼 :&nbsp; <span className='blue_1'>{cust_detial.loan_no}</span></p>
  <p className='title'>Lender 放債⼈ : 利多喜有限公司</p>
  <p className='title'>Registered Address 註冊地址 : Unit 1412, 14/F, Lippo Sun Plaza, 28 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong</p>
  <p className='title'>Borrower 借款⼈ : <span className='blue_1'>{cust_detial.borrower}</span></p>
  <p className='title'>HKID 香港⾝份證 : <span className='blue_1'>{cust_detial.id}</span></p>
  <p className='title'>Address 地址 : <span className='blue_1'>{cust_detial.address}</span></p>
  <table className='loan_table'>
  <tbody>
  <tr>
  <td colSpan="2" width="697">
  <p>Loan Amt. 貸款⾦額 : HK$ <span className='blue_1'>{cust_detial.loan_amt}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HONG KONG DOLLARS {cust_detial.loan_amt_eng} ONLY</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Interest Rate (p.a.) 年利率 : <span className='blue_1'>{cust_detial.interest}</span></p>
  </td>
  <td width="348">
  <p>Loan Date 貸款⽇期 : <span className='blue_1'>{cust_detial.loan_date}</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Total Tenors 總期數 : <span className='blue_1'>{cust_detial.tenors}</span></p>
  </td>
  <td width="348">
  <p>1st Repayment Date ⾸期還款⽇ : <span className='blue_1'>{cust_detial.first_repay_date}</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Repayment Cycle 還款週期 : <span className='blue_1'>{cust_detial.cycle}</span></p>
  </td>
  <td width="348">
  <p>Extended Interest 延期息 : HK$ <span className='blue_1'>0.00</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Repayment Date 每期還款⽇ : <span className='blue_1'>{cust_detial.repay_date}</span></p>
  </td>
  <td width="348">
  <p>Instalment Amt. 每期供款 : HK$ <span className='blue_1'>{cust_detial.instalment_amt}</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Total Repayment Amt. 總供款額 : <span className='blue_1'>{cust_detial.total_ins_amt}</span></p>
  </td>
  <td width="348">
  <p>1st Repayment Amt. ⾸期還款額 : HK$ <span className='blue_1'>{cust_detial.first_instalment_amt}</span></p>
  </td>
  </tr>
  <tr>
  <td width="349">
  <p>Total Interest 總利息 : HK$ <span className='blue_1'>{cust_detial.total_interest}</span></p>
  </td>
  <td width="348">
  <p>&nbsp;</p>
  </td>
  </tr>
  <tr>
  <td colSpan="2" width="697">
  <p>*Subsequent Repayment Day and Amount: As per Repayment Schedule</p>
  <p>往後之還款⽇及⾦額：以還款表為準</p>
  </td>
  </tr>
  </tbody>
  </table>
  <br/>
  <Loan_01 />
  
  </div>       

    

       
        <input
          type="checkbox"
          value={isSubscribed}
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
          className='checkbox_x2'
        /> 
        
        <span className='blue_1'>確認以上內容正確</span>
        <br/>
      
      <br/><button className="step_back" onClick={handleClickBack2}>上一頁</button>&nbsp;&nbsp;
      {
      isSubscribed 
      ? <button className="step" onClick={handleClick2}>下一步</button>
      : <button className="step_disabled" disabled onClick={handleClick2}>未確認</button>
      }
        
      </div>
}
      </>
    )
}
