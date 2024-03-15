import { useState } from "react";


const Formulario = ({ SetearAlerta }) => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (nombre === "" || email === "" || edad === "" || cargo === "" || telefono === "") {
      SetearAlerta({
        error: true,
        mensaje: "Por favor, debe completar todos los campos",
        tipo: "danger"
      });
      return;
    }
   
    else {
      
      
      
      setNombre("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTelefono("");
      
      SetearAlerta({
        error: true,
        mensaje: "Colaborador ingresado con exito",
        tipo: "light"
      });
      return;
    }


  }


  return (

    <form onSubmit={handleSubmit}>
      <h3>Agregar Colaborador</h3>
      <input className="form-control my-3" type="text" placeholder="Nombre del colaborador" aria-label="default input example" value={nombre} onChange={(e) => setNombre(e.target.value.trim())} />
      <input type="email" className="form-control mb-3" id="Email del colaborador" placeholder="Email del colaborador" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" min="0" placeholder="Edad del colaborador" aria-label="default input example" value={edad} onChange={(e) => setEdad(e.target.value.trim())} />
      <input className="form-control mb-3" type="text" placeholder="Cargo del colaborador" aria-label="default input example" value={cargo} onChange={(e) => setCargo(e.target.value.trim())} />
      <input className="input-numeric form-control mb-3" type="number" placeholder="Teléfono del colaborador" aria-label="default input example" value={telefono} onChange={(e) => setTelefono(e.target.value.trim())} />
      <button type="submit" className="btn btn-primary mb-3">Agregar nuevo colaborador</button>
    </form>
  )
}

export default Formulario
