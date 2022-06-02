import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

export default function LoginPage() {
  const [loginForm, SetLoginForm] = useState({
    nickname: "",
    clave: "",
    sede: "",
  });

  const [valid, SetValid] = useState({
    data: "",
    error: "",
    status: "",
    usuario: "",
  });

  //const [sedes, SetSedes] = useState([]);

  const ValidarUsuario = () => {
    axios
      //Aqui iria la url para hacer la validacion de usuario
      .post("http://localhost:8090/usuarios/login", {
        ...loginForm,
      })
      .then((response) => SetValid(response.data))
      .catch(({ error }) => console.log(error));

    if (valid.data === "Bienvenido") {
      handleClick();
    }
  };


  /*
  //Obtener el listado de sedes - Descartado
  const getSedes = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8090/sedes")
        .then(({ data }) => SetSedes(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  getSedes();
  */

  function handleChange(event) {
    const { name, value } = event.target;
    SetLoginForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo("/home");
  }

  return (
    <div className="login-body">
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container">
          <p>
            <input
              type="text"
              placeholder="Usuario"
              name="nickname"
              value={loginForm.nickname}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Clave"
              name="clave"
              value={loginForm.clave}
              onChange={handleChange}
            />
          </p>

          <p>
            <select
              className="form-select"
              aria-label="Default select"
              value={loginForm.sede}
              onChange={handleChange}
              name="sede"
            >
              <option defaultValue>Escoja la sede</option>

              <option key={1} value={1}>Lima</option>
              <option key={2} value={2}>Arequipa</option>
              <option key={3} value={3}>Piura</option>
            </select>
          </p>

          {valid.data === "Login Fallido" && (
            <p id="login-error" className="error-message">
              {" "}
              El usuario o contraseña con incorrectos
            </p>
          )}
          <p>
            <input type="button" value="Log in" onClick={ValidarUsuario} />
          </p>
        </form>
      </div>
    </div>
  );
}
