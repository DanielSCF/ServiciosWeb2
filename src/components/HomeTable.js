import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeRegister from "./HomeRegister";
import '../styles/Pages.css'

export default function HomeTable() {
  const [piezas, SetPiezas] = useState([]);

  const ListarPiezas = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/marca")
        .then(({ data }) => SetPiezas(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };

  ListarPiezas();

  //Navegar
  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos");
  }

  return (
    <main>
      <h1 className="title">Piezas</h1>

      <div className="form-table">

        {/* TO DO: SEARCH BY RANGE OF DATES */}

        
        <HomeRegister />

        <div className="small-table">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Sede</th>
                <th>Fecha de fabricacion</th>
                <th>Linea A</th>
                <th>Linea B</th>
                <th>Linea C</th>
              </tr>
            </thead>
            <tbody>
              {piezas.map((pieza) => {
                return (
                  <tr key={pieza.fabricacionid}>
                    <td>{pieza.fabricacionid}</td>
                    <td>{pieza.sede.nombre}</td>
                    <td>{pieza.fechadefabricacion}</td>
                    <td>{pieza.lineaA}</td>
                    <td>{pieza.lineaB}</td>
                    <td>{pieza.lineaC}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
  );
}
