import React, { Component } from "react";
import { Container } from "@mui/material";
import Tabla from "./TablaEstudiantes";

export default class Estudiantes extends Component {
  render() {
    const { filtroApellido, datos, encabezados } = this.props;
    return (
      <Container>
        <h1>Estudiantes</h1>
        {filtroApellido ? (
          <Tabla
            datos={datos.filter((dato) => {
              return dato.apellido.includes(filtroApellido);
            })}
            encabezados={encabezados}
            textoMarcado={filtroApellido}
          />
        ) : (
          <Tabla datos={datos} encabezados={encabezados} />
        )}
      </Container>
    );
  }
}
