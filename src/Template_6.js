import React from 'react'
import { useState, useContext } from 'react'
import { StatusContext } from './StatusContext'
//import SignToPDF from './SignToPDF';
import './css/Step.css';


export default function Template_6() {
    const {step_status,setStepStatus}= useContext(StatusContext)      
    const {imageURL,setImageURL}= useContext(StatusContext)      
  const {cust_detial,setCust_detial}= useContext(StatusContext)  
  
  const [submited, setSubmited] = useState(0);
  const [submit_result, setSubmit_result] = useState([]);

  
    const handleClickBack8 = ()=>{
      setStepStatus(5)
      //console.log(step_status)
    }

    const handleClick8 = ()=>{
      setStepStatus(7)
    }

    const handleClickSubmit = ()=>{
      setSubmited(1)
      fetch('https://zh22rbmsign.rbmoney.hk/api/submit.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({imageURL: imageURL , phone: cust_detial.phone , id :cust_detial.id , loan_no: cust_detial.loan_no})
      })
      .then(response => response.json())
      .then(data => setSubmit_result(data))
      
      //.then(setStepStatus(9))
      
    }
  
  console.log (submit_result.submit_success)
    
    return (
         
      <div>
          


  {submit_result.submit_success != 1 && 
  <>
           <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",                                   
              width: "50%",
              //height: "200px"
            }}
          />
  <br/>
  
  {submited == 0 && <><button className="step_back" onClick={handleClickBack8}>上一頁</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className="step" onClick={handleClickSubmit}>提交</button></>}
  
  {submited == 1 && <button className="step_disabled" disabled onClick={handleClickSubmit}>提交中</button>}
  </>
  } 

{submit_result.submit_success == 1 && 
  

   <>簽名成功,請按下一步繼續<br/><br/>

  <button className="step" onClick={handleClick8}>下一步</button>
   {/*<SignToPDF />*/}</>

  
  } 
      </div>
      
      
    )
}
