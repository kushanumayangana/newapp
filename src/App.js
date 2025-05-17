import './App.css';
import Welcome from './components/Welcome.jsx';
import Test from './components/Test.jsx';
import Phara from './components/Phara.jsx';
import Country from './components/Country.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Help from './page/Help.jsx';
function App() {
  return (


    <>
    <router>
      <switch>
        <route path='./app.js'></route>
      </switch>
    </router>

    <div className="App">
     <i><h1 >hellow world.</h1></i>
     <Welcome></Welcome>
     <Test/>
     <Phara/>
     
     
     
    </div>
    
    <Country name= ' sri lanka' city ='colombo'><br/><button className='sm'>see more</button></Country>
    <Country name = ' india' city = 'dilli'><br/><button className='sm'>see more</button></Country>
    <Country name = ' pakistan' city='islamabad'><br/><button className='sm'>see more</button></Country>
   
    </>
  );
}

  <div> <Router>
      <Routes>
        <Route path="/" element={<Help/>} />
      </Routes>
    </Router>
    </div> 


export default App;
