
const Listado = () => {
  return (
    <>

        <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lucas</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>+56965280503</td>
          </tr>
          <tr>
            <td>Lucas</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>+56965280503</td>
          </tr>
          <tr>
            <td>Lucas</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>Thornton</td>
            <td>+56965280503</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Listado
