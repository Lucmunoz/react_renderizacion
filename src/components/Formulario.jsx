import revisarID from '../AsignarID';
import { useState } from "react";


const Formulario = ({ SetearAlerta, bdColaboradores, setearColaboradores, setHistorialId, historialId }) => {

  /*Defino un estado de tipo objeto en el cual se almacenarán los valores para las propiedades según solicita el desafio.
    Se propone una dinámica de codig que asigna un ID según sea la ocurrencia de dos escenarios:
    - No se han eliminado colaboradores del registro, por tanto no existen ID que reutilizar
    - Se han eliminado colaboradores del registro, por tanto se reutiliza su ID.

    En la practica, esto no debiera ocurrir ya que la asignación de ID debiera ser, en todo caso, unica e irrepetible.

    Para asignar un ID llamno entonces a la función "revisarID" la cual es importada desde el documento "AsignarID.js.

    Esta función recibe como parámetro la base de datos original, le historial de id eliminados (estado - arreglo) y
    la función para setar el estado. */

  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: revisarID(bdColaboradores, historialId, setHistorialId),
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });


  /*Defino las funciones que serán llamadas en cada evento Onchange de los distintos cuadros de entradaElement de texto del formulario. En cada interacción
    que el usuario tenga con el formulario (ante el lanzamiento de algun evento onChange) se llama a la función revisar ID para actualizar y asignar el
    valor del ID del estado "nuevocolaborador".
    
    **************************************************************************************************
    ********************************************CONSULTA**********************************************
    **************************************************************************************************
    De que otra forma podría asignar el ID de forma "automatica" Si lo asigno al momento de hacer el submit, por ejemplo, al momento de limpiar las entradas
    de texto y prepararme para recibir los datos de un nuevo colaborador, la asignación del ID ocurre de fomra "desfasada", es decir se asigna al proximo evento
    on submit.¿como puedo corregir esto? No logro entender porque ocurre de forma desfasada. 
    
    La forma en que lo solucione fue como ya lo mencionaba, en cada evento onChage, incluyo la revisión de id.
                                                                                                    ↓
    const handleName = (value) => setNuevoColaborador({ ...nuevoColaborador, nombre: value, id: revisarID(bdColaboradores, historialId)});
    
    ¿Esta forma es adecuada o existe otra forma mejor para hacer esta asignación? Ya deciamos que en la vida real dificilmente ocurriría ya que las ID
    asignadas idealmente siempre son unicas. Pero me gustaria saber como solucionar esto. 
    
    Gracias.
 */
  
  const handleName = (value) => setNuevoColaborador({ ...nuevoColaborador, nombre: value, id: revisarID(bdColaboradores, historialId)});
  const handleEmail = (value) => setNuevoColaborador({ ...nuevoColaborador, correo: value, id: revisarID(bdColaboradores, historialId) });
  const handleEdad = (value) => setNuevoColaborador({ ...nuevoColaborador, edad: value, id: revisarID(bdColaboradores, historialId) })
  const handleCargo = (value) => setNuevoColaborador({ ...nuevoColaborador, cargo: value,id: revisarID(bdColaboradores, historialId)  })
  const handleTelefono = (value) => setNuevoColaborador({ ...nuevoColaborador, telefono: value,id: revisarID(bdColaboradores, historialId) })


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación solicitada por desafío. Analiza si hay algun campo vacío.
    if (nuevoColaborador.nombre === "" || nuevoColaborador.correo === "" || nuevoColaborador.edad === "" || nuevoColaborador.cargo === "" || nuevoColaborador.telefono === "") {
      SetearAlerta({
        error: true,
        mensaje: "Por favor, debe completar todos los campos",
        tipo: "danger"
      });
      return;
    }

    /*  Si el usuario ingresó informacion válida, se procede a agregar el nuevo colaborador. Después de haberlo agregado al arreglo
        principal, se emite una alerta indicando que la incorporación fue exitosa*/
    else {

      /*Al agregar un colaborador  al estado que contiene la base de datos, si es que su ID fue reutilizado, tengo que eliminarlo. Para esto, hago
        un metodo filter en donde busco si el ID utilizado existe en el estado historialID que contiene el arreglo de ID eliminados y lo elimino
        porque ya fue utilizado. */
      if (historialId.includes(Number(nuevoColaborador.id))) {
        const arregloIdFiltrado = historialId.filter((o) => { return o != nuevoColaborador.id })
        console.log(arregloIdFiltrado)
        setHistorialId(arregloIdFiltrado);
      }
      
    /*Con la siguiente linea de codig vacío los campos de entrada de texto del formulario */
      setNuevoColaborador({ id: revisarID(bdColaboradores, historialId), nombre: "", correo: "", edad: "", cargo: "", telefono: "" });

      /*************************************************************************************************
      ********************************************CONSULTA**********************************************
      **************************************************************************************************
      Si en esta sección de codigo, asigno el ID para el nuevo colaborador, con la siguiete linea de codigo, la asgnación ocurre de forma
      desfasada. En la lista, se repite el ultimo ID y cambia en la proxima ejecución. 
                                   ↓      
      setNuevoColaborador({ id: revisarID(bdColaboradores, historialId), nombre: "", correo: "", edad: "", cargo: "", telefono: "" });
      */     
      
      /*Con la siguiente sección de codigo, agrego el nuevo colaborador a la base de datos y seteo la alerta para indicar que se hizo de
      forma satisfactoria */
      const colaboradorTemporal = { ...nuevoColaborador }
      setearColaboradores([...bdColaboradores, colaboradorTemporal])

      SetearAlerta({
        error: true,
        mensaje: "Colaborador ingresado con exito",
        tipo: "light"
      });
      return;
    }
  }

  /* Render que mostrará en pantalla el formulario según las condiciones que solicia el desafío. */
  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Colaborador</h3>
      <input className="form-control my-3" type="text" placeholder="Nombre del colaborador" aria-label="default input example" value={nuevoColaborador.nombre} onChange={(e) => handleName(e.target.value)} />
      <input type="email" className="form-control mb-3" id="Email del colaborador" placeholder="Email del colaborador" aria-describedby="emailHelp" value={nuevoColaborador.correo} onChange={(e) => handleEmail(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" min="0" placeholder="Edad del colaborador" aria-label="default input example" value={nuevoColaborador.edad} onChange={(e) => handleEdad(e.target.value.trim())} />
      <input className="form-control mb-3" type="text" placeholder="Cargo del colaborador" aria-label="default input example" value={nuevoColaborador.cargo} onChange={(e) => handleCargo(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" placeholder="Teléfono del colaborador" aria-label="default input example" value={nuevoColaborador.telefono} onChange={(e) => handleTelefono(e.target.value.trim())} />
      <button type="submit" className="btn btn-primary mb-3">Agregar nuevo colaborador</button>
    </form>
  )
}

export default Formulario
