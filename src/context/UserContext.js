import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'https://zh22rbmsign.rbmoney.hk/api/',
});

export const UserContextProvider = ({children}) => {

    const [theUser, setUser] = useState(null);
    const [wait, setWait] = useState(false);
    const [theUserInfo, setUserInfo] = useState([]);

    const registerUser = async ({name,phone,password}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('register.php',{
                name,
                phone,
                password 
            });
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const loginUser = async ({phone,password}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('react_api.php',{
                phone,
                password 
            });
            if(data.success && data.token){
                localStorage.setItem('loginToken', data.token);
                setWait(false);
                return {success:1};
            }
            setWait(false);
            return {success:0, message:"驗證碼不正確"};
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }

    }

    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loginToken');
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;
        if(loginToken){
            const {data} = await Axios.get('getUser.php');
            if(data.success && data.user){
                setUser(data.user);
                setUserInfo(data)
                return;
            }
            setUser(null);
        }
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('loginToken');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{registerUser,loginUser,wait, user:theUser,userInfo:theUserInfo,loggedInCheck,logout}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;