import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Nav from './components/Nav/Nav';
import Login from "./components/Login/Login";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Inventory from "./components/Inventory/Inventory";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import AddProduct from "./components/AddProduct/AddProduct";
import MyItems from "./components/MyItems/MyItems";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="manageProducts" element={<ProtectedRoute><ManageProducts></ManageProducts></ProtectedRoute>} />
        <Route path="addProduct" element={<ProtectedRoute><AddProduct></AddProduct></ProtectedRoute>} />
        <Route path="myItems" element={<ProtectedRoute><MyItems></MyItems></ProtectedRoute>} />
        <Route path="inventory/:id" element={<ProtectedRoute><Inventory></Inventory></ProtectedRoute>} />
      </Routes>
      <Footer></Footer>
      <div><Toaster /></div>
    </div>
  );
}

export default App;
