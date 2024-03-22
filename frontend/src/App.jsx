import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Luggage from "./pages/Luggage";
import Backpacks from "./pages/Backpacks";
import Duffles from "./pages/Duffles";
import BrowseMore from "./pages/BrowseMore";
import Discover from "./pages/Discover";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Password from "./components/Password";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ShopNew from "./components/ShopNew";
import ShopBestseller from "./components/ShopBestseller";
import Search from "./components/Search";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./features/Context";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const {darkmode} = useContext(ThemeContext)

  // interceptors (centralized error handling)
  axios.interceptors.response.use((response)=>{
    return response;
  },(error)=>{
    if(error.response&&error.response.status === 401){
      toast.error("sorry session has expired please login again!!")
       localStorage.removeItem("token")
       setIsLoggedIn(false)
        navigate('/login');
    }
    return Promise.reject(error)
  })
  
  // update isloggedIn
  const handelLoginSuccess = (resdata) => {
    if(resdata&&resdata.data){
       if(resdata.data.token){
        localStorage.setItem("token",resdata.data.token);
       setIsLoggedIn(true);
       toast.success("Logged in successfully")
       }else if(resdata.data.status=400){
        toast.error(resdata.data.message);
       }
    }else{
      toast.error("an error occured")
    }
  };
  
  //update isloggedIN and Logout
  const hadelLogOutSuccess = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
    toast.success("Log out successfully")
  };

  const handelDashboard=()=>{
   setIsLoggedIn(false);
    navigate('/login');
  }

  // after page reload check token present inside the storage or not
  useEffect(() => {
    const checktoken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checktoken();
  }, []);

  return (
    
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }} className={darkmode?'dark':'light'}>
    
      <Navbar isLoggedIn={isLoggedIn} hadelLogOutSuccess={hadelLogOutSuccess} />
      <Routes>
        <Route
          path="/luggage"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Luggage />
            </PrivateRoute>
          }
        />
        <Route
          path="/backpacks"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Backpacks />
            </PrivateRoute>
          }
        />
        <Route
          path="/duffles"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Duffles />
            </PrivateRoute>
          }
        />
        <Route
          path="/browsemore"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <BrowseMore />
            </PrivateRoute>
          }
        />
        <Route
          path="/discover"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Discover />
            </PrivateRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={
            <Login
              handelLoginSuccess={handelLoginSuccess}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/password" element={<Password />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/shopnew" element={<ShopNew />} />
        <Route path="/bestseller" element={<ShopBestseller />} />
        <Route
          path="/search"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Search />
            </PrivateRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <HeroSection />
            </PrivateRoute>
          }
        />
        <Route
         path="/dashboard"
         element={<Dashboard handelDashboard={handelDashboard}/>}
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
  
};

export default App;
