import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import NavBar from "./components/General/NavBar/NavBar"
import Register from "./pages/register/Register"
import Error404 from "./pages/error/Error404"
import Login from "./pages/login/login"
//import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
import Menu from "./pages/MenuPage/MenuPage"
import { useState, useEffect } from "react"
import Footer from "./components/General/Footer/footer"
//import Footer from "./components/General/Footer/Footer"
import MisReservas from "./pages/ReservasPage/MisReservas"
import './style.css'

function App() {

  const [user, setUser] = useState(null);
  const [tokenInvalid, setTokenInvalid] = useState(false);

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);
  
  const admin = user?.loguedUser.userFounded.admin
  return (
    <BrowserRouter>
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/admin" element={tokenInvalid || !admin ?  <Error404/> : <Admin user={user} setTokenInvalid={setTokenInvalid}/>} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/misreservas" element={<MisReservas user={user}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Apps