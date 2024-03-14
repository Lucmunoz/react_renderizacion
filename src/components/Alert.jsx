const Alert = ({tipo, mensaje}) => {
    return (
      <div className={`alert alert-${tipo}`}>{mensaje}</div>
    )
  }
  
  export default Alert
  