import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/Navbar/NavBar";
import Sidebar from "./layout/Sidebar/Sidebar";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Sidebar/>
      <div className="app_container">
        <NavBar/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
