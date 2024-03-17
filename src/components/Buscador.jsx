/* Este componente devuelve el render a mostrar en pantalla del campo de entrada de texto para buscar un colaborador. En cadaa evento onChange 
se realiza el llamado a la función de seteo del estado search desde entregado como props desde App.jsx. este valor search sera luego utilizado
por el componente "listado.jsx" para mostrar los datos en pantalla. */

const Buscador = ({ setSearch }) => {
  const buscarEnArreglo = (event) => setSearch(event.target.value)
  return (
    <input type="text" placeholder="Busca un colaborador" className="form-control col-2" onChange={buscarEnArreglo} />
  )
}
export default Buscador
