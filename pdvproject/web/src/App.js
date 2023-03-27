import logo from './logo.svg';
import './App.css';
import Home from './pages/home/index.js'
import Login from './pages/login/index.js'
import User from './pages/user/User.js'
import UserSelect from './pages/userSelect/UserSelect.js'
import PdvHome from './pages/pdvHome/PdvHome.js'
import PdvEstoque from './pages/PdvEstoque/PdvEstoque.js'
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  const user = localStorage
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="/userSelect/:id" element={<UserSelect/>}></Route>
          <Route path={'/:id/pdvhome'} element={<PdvHome/>}></Route>
          <Route path={'/pdvhome/estoque/:id'} element={<PdvEstoque/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
