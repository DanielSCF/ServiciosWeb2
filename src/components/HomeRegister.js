import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomeRegister() {
  //Parece que la sede se hereda del inicio de sesión

  const [formData, setFormData] = useState({
    fechadefabricacion: "",
    lineaA: "",
    lineaB: "",
    lineaC: "",
    sede: "",
  });

  //Guardar informacion
  //Actualizar link
  function saveData() {
    axios
      .post("http://localhost:8090/", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));
    handleClick();
  }

  //Manejar el cambio de informacion dentro del formulario
  function handleChange(event) {
    const [name, value] = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  //Navegacion entre componentes
  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/home");
  }

  return (
    <div className="form small-form">
      <form>
        <h2>Registrar</h2>
        {/*Provisional fecha*/}
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Fecha"
            onChange={handleChange}
            name="fechadefabricacion"
            value={formData.fechadefabricacion}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Línea A"
            onChange={handleChange}
            name="lineaA"
            value={formData.lineaA}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Línea B"
            onChange={handleChange}
            name="lineaB"
            value={formData.lineaB}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Línea C"
            onChange={handleChange}
            name="lineaC"
            value={formData.lineaC}
          />
        </div>

        <div className="button-container">
          <button className="btn btn-success new" onClick={saveData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
