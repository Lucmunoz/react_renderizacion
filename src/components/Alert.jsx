/* Componente encargado de devolver el render de la alerta según sea la situación de exito o error si hay algun campo de entrada de texto vacío. */
const Alert = ({ alerta }) => alerta.error ? <div className={`alert alert-${alerta.tipo}`}>{alerta.mensaje}</div> : ""
export default Alert
  