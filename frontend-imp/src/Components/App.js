import './App.css';
import logo from "../imges/logo.jpg";
import Secartary from './Secartary/Secartary';
import Office from './Office/Office';
import { Routes, Route } from "react-router-dom";
import MyNavbar from './Navbar/MyNavbar';
function App() {
  return (
    <div className="App">
      <MyNavbar/>
     <h1 className='text-center mt-4'> معهد الحرب الألكترونية </h1>
     <Routes>
    <Route path='/office' element={<Office/>}/>
    <Route path='/secartary' element={<Secartary/>}/>
    <Route path='/' element={<Secartary/>}/>
    
     </Routes>
     {/* <Secartary /> */}
     {/* <Office/> */}
{/* <div className='logoDiv'> <img className='w-100 h-100' src={logo} alt="Electronic" /> </div> */}
    </div>
  );
}

export default App;
