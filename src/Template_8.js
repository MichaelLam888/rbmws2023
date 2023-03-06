import React, { useState,useContext } from 'react';
import { StatusContext } from './StatusContext'
import axios from 'axios';

const Template_8 = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {cust_detial,setCust_detial}= useContext(StatusContext)    
  const {step_status,setStepStatus}= useContext(StatusContext)   
  const [uploaded, setuploaded] = useState(false);


  const handleClick10 = ()=>{
    setStepStatus(9)
  }

  const types = ['image/png', 'image/jpeg', 'image/gif', 'image/heic'];
  const maxSize = 5000000; // 5 MB

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type) && selected.size <= maxSize) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setError('');
    } else if (selected && selected.size > maxSize) {
      setFile(null);
      setPreview(null);
      setError('File size is too big. Please select a file smaller than 5 MB.');
    } else {
      setFile(null);
      setPreview(null);
      setError('Please select an image file (png, jpeg, gif, heic).');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file.');
      console.log('Please select a file.');
      return;
      
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('loan_no', cust_detial.loan_no);

    try {
      await axios.post('https://zh22rbmsign.rbmoney.hk/api/uploadFile.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res => {
        console.log (file);
        console.log(res.data.status);
        setuploaded(res.data.status);
    });

      //setFile(null);
      //setPreview(null);
      
    } catch (err) {
      console.log (err);
      setError('Failed to upload image. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} />
      <div className="output">
      <span className='blue_2'><h1>第二步 : 請跟以下示範圖片動作拍照</h1></span>
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">Uploading...</div>}
        {preview ? (
          <img src={preview} alt="Preview" width="80%" />
        ) : (
          <img src={process.env.PUBLIC_URL+"images/sign_02.jpg"} alt="Default" width="80%" />
        )}
      </div>
      {uploaded ? (
            <button className="step" onClick={handleClick10}>下一步</button>
        ) : (
          <button type="submit" disabled={loading}>
           Submit
         </button>
        )}


     
    </form>
  );
};

export default Template_8
