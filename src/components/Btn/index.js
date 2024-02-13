import React, { useContext} from 'react'
import { Context } from '../../App'
import './Btn.css'

const Btn = () => {
    const [signedIn,setSignedIn]=useContext(Context)
  return (
    <button onClick={()=>setSignedIn(!signedIn)}>
        {signedIn?'Cerrar sesión':'Iniciar sesión'}
    </button>
  )
}

export default Btn