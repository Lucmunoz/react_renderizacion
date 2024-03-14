import Alert from "./Alert.jsx"
const Formulario = () => {
  return (
    <>

      <form className="">
        <h3>Agregar Colaborador</h3>
        <input className="form-control my-3" type="text" placeholder="Nombre del colaborador" aria-label="default input example" />
        <input type="email" className="form-control mb-3" id="Email del colaborador" placeholder="Email del colaborador" aria-describedby="emailHelp" />
        <input className="form-control mb-3" type="number" min="0" placeholder="Edad del colaborador" aria-label="default input example" />
        <input className="form-control mb-3" type="text" placeholder="Cargo del colaborador" aria-label="default input example" />
        <input className="form-control mb-3" type="text" placeholder="Teléfono del colaborador" aria-label="default input example" />
        <button type="submit" className="btn btn-primary mb-3">Agregar nuevo colaborador</button>
      </form>

      <Alert/>
    </>
  )
}

export default Formulario
