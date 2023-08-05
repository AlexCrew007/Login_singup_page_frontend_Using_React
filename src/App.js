import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import { PrivateRoute } from './components/PrivateRoute';

function App() {

  const [isLogin, setIsLogin]=useState(false)

  return (
    <div className="flex flex-col bg-slate-900 h-[100vh]  ">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}> </Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login setIsLogin={setIsLogin}></Login>}></Route>
        <Route path='/signup' element={<Signup setIsLogin={setIsLogin}></Signup>}></Route>
        
        <Route path='/dashboard' element={
          <PrivateRoute isLogin={isLogin}>
            <Dashboard></Dashboard>
          </PrivateRoute>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
