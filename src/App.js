import {useState} from 'react';
import './App.css';
import React from 'react';
import TxtBox from './components/TxtBox';
import Btn from './components/Btn';
export const Context = React.createContext();



function App() {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Btn />
      <h1>{signedIn?"Cerrar sesión":"Iniciar sesión"}</h1>
      <TxtBox />
    </Context.Provider>
  );
}




export default App;
