
import Listado from './components/Listado.jsx'
import Alert from './components/Alert.jsx'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
import BaseColaboradores from './components/BaseColaboradores.js'

import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid w-100'>
      <p>hola</p>
        <Listado Arreglo={BaseColaboradores}/>
        <Alert/>
        <Buscador/>
        <Formulario/>
      </div>
    </>
  )
}

export default App
