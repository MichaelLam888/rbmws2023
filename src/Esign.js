import React from 'react'
import { useState, useRef,useContext } from 'react'
import Popup from "reactjs-popup";
import SignaturePad from 'react-signature-canvas'
import { StatusContext } from './StatusContext';
export default function Esign(){

    
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const {imageURL,setImageURL}= useContext(StatusContext)  
    const sigCanvas = useRef({});
  
    /* a function that uses the canvas ref to clear the canvas 
    via a method given by react-signature-canvas */
    //const clear = () => sigCanvas.current.clear();
    const clear = () => setImageURL(null);
  
    /* a function that uses the canvas ref to trim the canvas 
    from white spaces via a method given by react-signature-canvas
    then saves it in our state */
    const save = () =>
      setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  
    return (
      <div className="AppSign">
        <h1>電子簽名</h1>
        <Popup
          modal
          trigger={<button className='play'>開始簽名</button>}
          closeOnDocumentClick={false}
          overlayStyle
        >
          {close => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                className: "signatureCanvas"
                }}
              />
              
              {/* Button to trigger save canvas image */}
              <div><button onClick={clear}>清除</button>
              <button
            className="button"
            onClick={() => {
              //console.log('modal closed1 ');
              setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
              close();
            }}
          >
            儲存
          </button></div>

            </>
          )}


        </Popup>
        <br />
        <br />
        {/* if our we have a non-null image url we should 
        show an image and pass our imageURL state to it*/}
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "80%"
            }}
          />
        ) : null}
      </div>
    );
  }