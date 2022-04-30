import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Nav from './components/Nav/Nav';
import Login  from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/"  element={<Home></Home>}/>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="login" element ={<Login></Login>}/>
        <Route path="manageProducts" element={<ManageProducts></ManageProducts>}/>
      </Routes>
    </div>
  );
}

export default App;
