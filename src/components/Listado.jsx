const Listado = ({ bdColaboradores, search }) => {
  const bdColaboradoresFiltrada = bdColaboradores.filter((colaborador) => {
    return (colaborador.id.toLowerCase().includes(search.toLowerCase()) || colaborador.nombre.toLowerCase().includes(search.toLowerCase()) || colaborador.correo.toLowerCase().includes(search.toLowerCase()) || colaborador.edad.toLowerCase().includes(search.toLowerCase()) || colaborador.cargo.toLowerCase().includes(search.toLowerCase()) || colaborador.telefono.toLowerCase().includes(search.toLowerCase()))
  })
  
  const handleClick = () => {
    console.log("sss")
    //Eliminar
  }

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
            bdColaboradoresFiltrada.map((item) => {
              return (
                <tr key={item.id}>
                  <td >{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                  <td>{item.edad}</td>
                  <td>{item.cargo}</td>
                  <td>{item.telefono}</td>
                  <td><button type="button" className="border border-0 bg-transparent" onClick={handleClick}><i className="fa-solid fa-trash "></i></button></td>
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