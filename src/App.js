import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import DashBoard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  
  
  return (
    <div className="bg-richblack-900  ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn= {setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoard/>

        </PrivateRoute>
        
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
