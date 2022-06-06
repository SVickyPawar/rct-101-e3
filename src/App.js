import "./App.css";
import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar/>
      <Routes>
       <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
