import React from 'react'
import { useState, useContext , useEffect } from 'react'
import { StatusContext } from './StatusContext'
import './css/Step.css';
import './css/PlayButton.css';

export default function Template_4() {

  const {step_status,setStepStatus}= useContext(StatusContext)  
  const {playback_status,setPlaybackStatus}= useContext(StatusContext)    
  const {cust_detial,setCust_detial}= useContext(StatusContext)  

  const handleClick5 = ()=>{
    setStepStatus(5)
  }

  const handleClickBack5 = ()=>{
    setStepStatus(3)
    //console.log(step_status)
  }

  const handleAudioEnded = () => {
    setPlaybackStatus(1);
  };

  const [dur_sec, setdur_sec] = useState(0);
  const [time_left, setTime_left] = useState(0);


let audioSource = 'data:audio/wav;base64,' + cust_detial.audioContent

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    < div >

    播放錄音
    內容 : <br /><br />
    <div className='loan_terms'>{ cust_detial.voice_raw}</div>

     <div>
      <audio hidden controls="controls" autobuffer="autobuffer" id="player" onEnded={handleAudioEnded}>
        <source src={audioSource} />
      </audio>
      <br />
      {  dur_sec == 0 &&  <></> }
      {  dur_sec > 0 &&  <span>錄音總長度 : {dur_sec} 秒 <br/> 未播放時間 : {time_left} 秒</span> }
      <span></span>
      <br /><br />

      <button className='play' onClick={() => 
      {
        document.getElementById('player').play()        
        setdur_sec(Math.floor(document.getElementById('player').duration))  
      }
      }
        >播放</button>&nbsp;&nbsp;

      <button className='play' onClick={() => 
        {
         document.getElementById('player').pause()          
         setTime_left(Math.floor(document.getElementById('player').duration - document.getElementById('player').currentTime))
        }
        }>暫停</button>&nbsp;&nbsp;
      
      <button className='play' onClick={() => 
      {
      document.getElementById('player').currentTime=0
      document.getElementById('player').play()
      setTime_left(0)
      }
    }
      >重新播放</button> 
      <br /><br />
      <button  onClick={() => document.getElementById('player').volume += 0.1}>+</button>&nbsp;音量&nbsp;
      <button  onClick={() => document.getElementById('player').volume -= 0.1}>-</button> 
      
      
      <br /><br />

      { playback_status == 0 && <div>未完成播放</div>} 
      { playback_status == 1 && <div>已完成播放</div>}   
    
       <br/><button className="step_back" onClick={handleClickBack5}>上一頁</button>&nbsp;&nbsp;
       
       { playback_status == 0 && <button className="step_disabled" disabled>未完成播放</button>} 
       
       
      { playback_status == 1 && <button className="step" onClick={handleClick5}>下一步</button>}

    </div>
    </div >
  )
  }
