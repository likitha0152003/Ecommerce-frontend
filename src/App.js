import React from 'react'
import Navbar from './Component/Navbar'
import { Products } from './Pages/Products'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import './App.css'
import { Jewelary } from './Pages/Jewelary'
const App = () =>{
  return(
    <Router>
      <Navbar />
      <Routes>
      <Route path="/jewelary" element={<Jewelary />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}
export default App;