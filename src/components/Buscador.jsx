const Buscador = ({ setSearch }) => {
  const buscarEnArreglo = (event) => setSearch(event.target.value)
  return (
    <input type="text" placeholder="Busca un colaborador" className="form-control col-2" onChange={buscarEnArreglo} />
  )
}
export default Buscador
