import Navbar from "./components/Navbar"
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div >
      <ToastContainer />
    <div className="bg-slate-900" >
           <Navbar/>
    </div>
    <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/cart" element ={<Cart/>}/>  
    </Routes>
    </div>
  );
}
  