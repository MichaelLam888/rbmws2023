import {useState,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
const Login = () => {
    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);    
    const [SMS_status,setSMSStatus]= useState(0)
    const [formData, setFormData] = useState({
        phone:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();    



        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

   
    
    const handleSMSClick = ()=>{ 
        //fetch('https://gdmaskdemo138.gdmask.com/rockadmin/login')
        if (formData.phone.length == 0) {
            setErrMsg('請填寫電話號碼');
            return; 
            }       
            else {
                setErrMsg(false);
                }


        fetch('https://zh22rbmsign.rbmoney.hk/api/login_sms.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({phone: formData.phone})
        })
        .then(response => response.json())
        //.then(data => setCust_detial(data.Name))  
        .then(data => setSMSStatus(data.sms_status))
      }


    return (
        <div className="myform">
             <img width="50%" src={process.env.PUBLIC_URL+"images/logo.jpg"} /> 
            <h2>RB MONEY 網簽系統</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="phone">電話號碼:</label>
                <input type="text" name="phone" onChange={onChangeInput} placeholder="電話號碼" id="phone" value={formData.phone} required />


                {(() => {
                if (SMS_status == 1) {
                return (
                <>
                <label htmlFor="password">驗證碼:</label>
                <input type="text" name="password" onChange={onChangeInput} placeholder="驗證碼" id="password" value={formData.password} required />
                {errMsg && <div className="err-msg">{errMsg}</div>}
                <br/>
                {redirect ? redirect && SMS_status == 1 : <button type="submit" disabled={wait} >登入</button>}    
                
                </>
                )
                } else {
                return (
                <>
                <input type="text" name="password" onChange={onChangeInput} placeholder="驗證碼" hidden id="password" value={formData.password} required />
                {errMsg && <div className="err-msg">{errMsg}</div>}    
                <br/>
                {redirect ? redirect && SMS_status == 1 : <button type="submit" hidden disabled={wait} >登入</button>}           
                </>
                )
                }
                })()}
                 
            </form>

            {(() => {
                if (SMS_status == 1) {
                return (
                <>
                <button disabled hidden onClick={handleSMSClick}>發送SMS</button>     
                "SMS已發送"                
                </>
                )
                } else if (SMS_status == 2){
                return (
                <>
                "發送太頻密,請 15 分鐘後再試試"   
                </>
                )
                } else if (SMS_status == 3){
                return (
                <>
                <button onClick={handleSMSClick}>發送SMS</button>  
                "電話號碼不正確"   
                </>
                )
                } else if (SMS_status == 4){
                    return (
                    <>
                    <button onClick={handleSMSClick}>發送SMS</button>  
                    "Network Error!!"   
                    </>
                    )
                    }
                else {
                return (
                <>
                <button onClick={handleSMSClick}>發送SMS</button> 
                </>
                )  
                }
                })()}

        </div>
    )
}

export default Login;