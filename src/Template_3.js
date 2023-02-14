import React from 'react'
import { useState, useContext , useEffect } from 'react'
import { StatusContext } from './StatusContext'
import './css/Step.css';
import Loan_04 from './Loan_04';

export default function Template_3() {

  const {step_status,setStepStatus}= useContext(StatusContext)  
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleClick4 = ()=>{
    setStepStatus(4)
  }

  const handleClickBack4 = ()=>{
    setStepStatus(2)
    console.log(step_status)
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

  return (

    <div>
      
       <Loan_04 />
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
      
      <br/><button className="step_back" onClick={handleClickBack4}>上一頁</button>&nbsp;&nbsp;
      {
      isSubscribed 
      ? <button className="step" onClick={handleClick4}>下一步</button>
      : <button className="step_disabled" disabled onClick={handleClick4}>未確認</button>
      }
    </div>
  )
  }
