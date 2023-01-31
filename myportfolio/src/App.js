import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  return (
    <div className="App" >
          <Navbar/>
      <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        <Route path='Contact/' element={<Contact/>}></Route>

  

      </Routes>




      </BrowserRouter>
      

      
      
    </div>
  );
}

export default App;
