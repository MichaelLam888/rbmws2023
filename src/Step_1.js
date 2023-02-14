import React, { useState,useContext, useEffect } from 'react'
import Template_1 from './Template_1'
import Template_2 from './Template_2'
import Template_3 from './Template_3'
import Template_4 from './Template_4'
import Template_5 from './Template_5'
import Template_6 from './Template_6'
import Template_7 from './Template_7'
import Template_8 from './Template_8'
import Template_9 from './Template_9'
import { StatusContext } from './StatusContext'
import {UserContext} from './context/UserContext'
import './css/Step.css';


export default function Step_1() {

  const {step_status,setStepStatus}= useContext(StatusContext)  
  const {cust_detial,setCust_detial}= useContext(StatusContext)  
  
  const {isLoaded,setIsLoaded}= useContext(StatusContext)  
  const {user,logout,userInfo} = useContext(UserContext);
  
  const handleClick = ()=>{
    setStepStatus(1)
  }



  useEffect(()=>
  { 
    fetch('https://zh22rbmsign.rbmoney.hk/api/get_detials.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone: userInfo.phone , id: userInfo.pid})
    })
    .then(response => response.json())
    //.then(data => setCust_detial(data.Name))  
    .then(data => setCust_detial(data))
    .then(data => setIsLoaded(data))
   
  },[])








  return (

    <div>
      <h1>RB MONEY 網上簽單系統</h1>
       <img width="90%" src={process.env.PUBLIC_URL+"images/header.png"} /> 
       <br/>
       {step_status == 0 && <img width="90%" src={process.env.PUBLIC_URL+"images/arg01.png"} />}
       
       <br/>
       {step_status == 0 && <button className="step" onClick={handleClick}>開始</button>}
       {step_status == 1 && <Template_1/>}
       {step_status == 2 && <Template_2/>}
       {step_status == 3 && <Template_3/>}       
       {step_status == 4 && <Template_4/>} 
       {step_status == 5 && <Template_5/>}
       {step_status == 6 && <Template_6/>}       
       {step_status == 7 && <Template_7/>}   
       {step_status == 8 && <Template_8/>}
       {step_status == 9 && <Template_9/>}
       <br/><br/>
    </div>
  )
}
