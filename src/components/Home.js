import {useContext} from 'react'
import {UserContext} from '../context/UserContext'
import Step_1 from '../Step_1'

const Home = () => {
    const {user,logout,userInfo} = useContext(UserContext);
    //console.log (userInfo)
    return (
        <div className="home">
            <div className="img" hidden >🧒🏻
            <h1>{user}<br/><span>{userInfo.phone}</span></h1></div>
            <Step_1/>
            
            <button onClick={logout} hidden className="logout">Logout</button>
        </div>
    )
}

export default Home;
