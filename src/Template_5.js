import React from 'react'
import { useState, useContext } from 'react'
import { StatusContext } from './StatusContext'
import Esign from './Esign'
import "./sigCanvas.css";
import './css/Step.css';
import './css/PlayButton.css';

export default function Template_5() {

  const {step_status,setStepStatus}= useContext(StatusContext)
    const {imageURL,setImageURL}= useContext(StatusContext)  

  const handleClick7 = ()=>{
    setStepStatus(6)
  }

  const handleClickBack7 = ()=>{
    setStepStatus(4)
    console.log(step_status)
  }


  
  return (
       
    <div id="sign_area">
     
       <Esign />
       <br/><button className="step_back" onClick={handleClickBack7}>上一頁</button>&nbsp;&nbsp;<button className="step" onClick={handleClick7}>下一步</button>

    </div>
    
    
  )

  
  }
