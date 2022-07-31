import './App.css';
import React from "react";
import { Route , Routes } from 'react-router-dom';



import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => {
   return <h1>HatsPage</h1>
  
}

function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route  path='/hats' element = {<HatsPage />} />

      </Routes>

      
    </div>
  );
}

export default App;
