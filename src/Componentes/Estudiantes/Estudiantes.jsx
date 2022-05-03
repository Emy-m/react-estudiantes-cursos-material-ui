import React, { useState } from "react";
import { Container } from "@mui/material";
import Tabla from "./TablaEstudiantes";
import FormularioEstudiante from "./FormularioEstudiante";
import { Button } from "@mui/material";

export default function Estudiantes(props) {
  const { filtroApellido, datos, encabezados, agregarEstudiante } = props;
  const [formulario, setFormulario] = useState(false);

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
      {formulario ? (
        <FormularioEstudiante agregarEstudiante={agregarEstudiante} />
      ) : (
        <Button
          style={{ marginTop: "10px" }}
          variant="contained"
          onClick={() => setFormulario(true)}
        >
          Agregar Estudiante
        </Button>
      )}
    </Container>
  );
}
