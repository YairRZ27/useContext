import React, { useContext } from 'react';
import {Context} from '../../App'; 

const TxtBox = () => {
  const [signedIn,setSignedIn]=useContext(Context)
  return (
    <p>{signedIn?"Hola":" "}</p>
    
  );
}

export default TxtBox; 
