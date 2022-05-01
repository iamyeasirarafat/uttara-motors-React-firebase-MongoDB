import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Nav from './components/Nav/Nav';
import Login  from "./components/Login/Login";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Inventory from "./components/Inventory/Inventory";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/"  element={<Home></Home>}/>
        <Route path="home" element={<Home></Home>}/>
        <Route path="login" element ={<Login></Login>}/>
        <Route path="manageProducts" element={<ManageProducts></ManageProducts>}/>
        <Route path="inventory/:id" element={<ProtectedRoute><Inventory></Inventory></ProtectedRoute>}/>
      </Routes>
      <Footer></Footer>
      <div><Toaster/></div>
    </div>
  );
}

export default App;
