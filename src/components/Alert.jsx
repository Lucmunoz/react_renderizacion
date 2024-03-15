const Alert = ({alerta}) => alerta.error? <div className={`alert alert-${alerta.tipo}`}>{alerta.mensaje}</div>: ""
export default Alert
  