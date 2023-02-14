import { useContext,useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { StatusContext } from './StatusContext';
import { UserContext } from './context/UserContext';
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {

  const { user } = useContext(UserContext); 
  const [step_status,setStepStatus] = useState(0)
  const [playback_status,setPlaybackStatus]= useState(0)  
  const [imageURL, setImageURL] = useState(null); 
  let [cust_detial,setCust_detial] = useState([])  
  const [isLoaded,setIsLoaded]= useState([])

  return (
<StatusContext.Provider value={{isLoaded,setIsLoaded,cust_detial,setCust_detial,imageURL, setImageURL,step_status,setStepStatus,playback_status,setPlaybackStatus}}>
    <div className="container">
        <BrowserRouter>
          <Routes>
            { user && <Route path="/" element={<Home/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              </>
            )}
            <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
          </Routes>
        </BrowserRouter>
    </div>

    </StatusContext.Provider>
    

    

      
   


  );
}

export default App;
