const Listado = ({ bdColaboradores, search }) => {
  const bdColaboradoresFiltrada = bdColaboradores.filter((colaborador) => {
    return (colaborador.id.toLowerCase().includes(search.toLowerCase()) || colaborador.nombre.toLowerCase().includes(search.toLowerCase()) || colaborador.correo.toLowerCase().includes(search.toLowerCase())|| colaborador.edad.toLowerCase().includes(search.toLowerCase())|| colaborador.cargo.toLowerCase().includes(search.toLowerCase())|| colaborador.telefono.toLowerCase().includes(search.toLowerCase()) )
  })

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