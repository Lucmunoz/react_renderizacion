import React from "react";

const revisarID = (bdColaboradores, historialId, setHistorialId) => {
  if (historialId.length == 0) {
    /*  El estado historialID guarda los ID de los colaboradores eliminados a fin de reasignarlos.
            Si la longitud de este arreglo es igual a 0 quiere decir que no tengo ID para reutilizar. Entonces, busco
            el ultimo ID o el valor mas alto (asumiendo correlatividad) desde mi base de datos.

            A este valor, le sumo 1 y lo retorno como valor para asignar al nuevo colaborador.*/

    let maxID = Math.max.apply(
      Math,
      bdColaboradores.map(function (o) {
        return (Number(o.id) + 1).toString();
      })
    );
    return maxID.toString();
  } else {
    /*  Si he eliminado colaboradores, tengo su ID para reutilizarlo. Entonces, este ID estará almacenado en el estado
        "historialID", lo que hago entonces es buscar el valor de Id disponible mas bajo y retornarlo para que se asigne
        al nuevo colaborador. Lo devuelvo convertido en texto ya que este es el formato en que se almacena en el objeto colaborador*/

    let minID = Math.min.apply(
      Math,
      historialId.map(function (o) {
        return o;
      })
    );
    return minID.toString();
  }
};

export default revisarID;
