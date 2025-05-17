import './App.css';
import Welcome from './components/Welcome.jsx';
import Test from './components/Test.jsx';
import Phara from './components/Phara.jsx';
import Country from './components/Country.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  //const x = alert('open');
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

export default App;
