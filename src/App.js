
import './App.css';
import React from 'react';
import MainContext from './components/MainContext';
import { DarkModeProvider } from './context/DarkModeContext';


function App() {


  return (
    <div>
      <DarkModeProvider>
        <MainContext /> 
      </DarkModeProvider>       
    </div>
  );
}

export default App;
