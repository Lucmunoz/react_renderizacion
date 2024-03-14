
import Listado from './components/Listado.jsx'
import Alert from './components/Alert.jsx'
import Buscador from './components/Buscador.jsx'
import Formulario from './components/Formulario.jsx'
//import BaseColaboradores from './components/BaseColaboradores.js'

import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" container-fluid row m-0 p-5 justify-content-center text-center column-gap-xl-5">
        <div className="container col-11 mb-5 col-xl-8 m-xl-0 ">
          <h2 className="text-xl-start">Lista de colaboradores</h2>
          <div className="col-7 mx-auto mx-xl-0 mt-4 mb-3">
            <Buscador />
          </div>
          <div className="table-responsive">
            <Listado />
          </div>
        </div>
        <div className="col-8 col-xl-3 ">
          <Formulario />
        </div>
      </div>
    </>
  )
}

export default App
