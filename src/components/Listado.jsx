

const Listado = ({ bdColaboradores, setearColaboradores, search, historialId, setHistorialId }) => {

/*  Antes de proceder a mostrar la lista de colaboradores, verifico el valor la existencia del texto ingresado en todos los campos según solicita el
    desafío. Esto lo hago haciendo uso del metodo "includes" transformando todo el texto a minusculas.
    
    Haciendo uso de estas condiciones, el metodo filter creará un nuevo arreglo con los elementos a mostrar. No sin antes ordenarlos de forma 
    ascendente mediante el metodo .sort. */

  const bdColaboradoresFiltrada = bdColaboradores.filter((colaborador) => {
    return (colaborador.id.toLowerCase().includes(search.toLowerCase()) || colaborador.nombre.toLowerCase().includes(search.toLowerCase()) || colaborador.correo.toLowerCase().includes(search.toLowerCase()) || colaborador.edad.toLowerCase().includes(search.toLowerCase()) || colaborador.cargo.toLowerCase().includes(search.toLowerCase()) || colaborador.telefono.toLowerCase().includes(search.toLowerCase()))
  })

  const bdColaboradoresFiltradaOrdenada = bdColaboradoresFiltrada.sort((p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);

/*  OPCIONAL: 
    Desafío propone implementar mecanismo para eliminar colaboradores. Para ello, utilizarmos el id como identificador del elemento que vamos a eliminar. El id es enviado como
    parámetro desde la función asociada al evento onClick del icono para eliminar. Procedemos de la siguiente manera:
    
    -Antes de proceder, creamos una copia del arreglo original. Es decir, la base de datos importada. 
    -Luego, con el metodo ".findIndex" vamos a recorrer este arreglo para encontrar el indice del elemento (en este caso el objeto) que tiene dicho id. 
    -Una vez que lo encontramos, hacemos un splice para eliminar este objeto del arreglo.
    -Finalmente, llamamos a la funcion setearColaboradores (entregad como props desde App.jsx) para asignar este nuevo arreglo al estado "colaboradores"    
    
    Lo anterior, tambien se puede realizar mediante el metodo filter de una forma muco mas abreviada.
*/
  const handleClickDelete = (id) => {

    const arregloTemporal = [...bdColaboradores]
    const index = arregloTemporal.findIndex((element) => element.id == id)
    arregloTemporal.splice(index, 1)
    setearColaboradores(arregloTemporal);

/*Con setHistorialId voy creando un arreglo "historial" con los id eliminados para reutilizarlos. Esto, pues estamos trabajando con id's estáticos, de
  de forma numérica, secuencial: 1,2,3, etc. Entonces, al asignar un nuevo colaborador, voy a verificar si dispongo de "id" eliminados, para reutilizarlos y si no,
  busco el valor mas alto y a ese valor le sumo 1 para asi denifir un nuevo id.

Comentario al revisor: En este componente ya etoy trabajando con 5 props. los ultimos 2 guardan relación con el manejo de id. ¿puedo trabajar esto de otra forma?*/
  
    setHistorialId([...historialId, Number(id)])

    //Metodo filter
    //setearColaboradores(bdColaboradores.filter((element) => {element.id != (id)}));        
  }

/*Render que mostrará en pantalla la lista con los datos de cada objeto que forma parte del arreglo base de datos. La renderizacio´n de datos
  se hace meidante el metodo MAP. Asingnado un key unico a cada elemento renderizado. Este key es el ID ya que como condición del codigo, este
  valor nunca se repetira.

  Junto con lo anterior, se atiende el desafío opcional de añadir la capacidad de eliminar colaboradores. */

  return (
    <>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            bdColaboradoresFiltradaOrdenada.map((item) => {
              return (
                <tr key={item.id}>
                  <td >{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                  <td>{item.edad}</td>
                  <td>{item.cargo}</td>
                  <td>{item.telefono}</td>
                  <td><button type="button" className="border border-0 bg-transparent" onClick={() => handleClickDelete(item.id)}><i className="fa-solid fa-trash "></i></button></td>
                </tr>

              );
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Listado