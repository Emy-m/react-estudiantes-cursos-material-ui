import { Container } from "@mui/material";
import Tabla from "./TablaCursos";
import React, { Component } from "react";

export default class Cursos extends Component {
  render() {
    const {
      datos,
      encabezados,
      desplegables,
      nombreDesplegable,
      inscripcion,
    } = this.props;
    return (
      <Container>
        <h1>Cursos</h1>
        <Tabla
          datos={datos}
          encabezados={encabezados}
          desplegables={desplegables}
          nombreDesplegable={nombreDesplegable}
          inscripcion={inscripcion}
        />
      </Container>
    );
  }
}
