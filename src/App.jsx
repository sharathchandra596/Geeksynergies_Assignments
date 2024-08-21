import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Home from "./pages/Home"
import CompanyDetails from "./pages/CompanyDetails"



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/" element={<LogIn/>}/>
    
    <Route path="/home" element={<Home/>}/>
    <Route path="/company" element={<CompanyDetails/>}/>
    </Routes>
    </>
  )
}

export default App
