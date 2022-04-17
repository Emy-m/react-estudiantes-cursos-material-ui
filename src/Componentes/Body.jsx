import React, { Component } from "react";
import Inicio from "./Inicio";
import Cursos from "./Cursos/Cursos";
import Estudiantes from "./Estudiantes/Estudiantes";
import { Container } from "@mui/material";
import Inscripcion from "./Cursos/Inscripcion";

const estudiantes = [
  {
    nombre: "Juan",
    apellido: "Perez",
    direccion: "Calle falsa 123",
    localidad: "Ciudad",
    telefono: "123456789",
  },
  {
    nombre: "Pedro",
    apellido: "Perez",
    direccion: "Calle falsa 123",
    localidad: "Ciudad",
    telefono: "123456789",
  },
  {
    nombre: "Tomas",
    apellido: "Cabrera",
    direccion: "Calle falsa 123",
    localidad: "Ciudad",
    telefono: "123456789",
  },
  {
    nombre: "Karen",
    apellido: "Olivares",
    direccion: "Calle falsa 321",
    localidad: "Parana",
    telefono: "456789123",
  },
];

const encabezadosEstudiantes = [
  "Nombre",
  "Apellido",
  "Direccion",
  "Localidad",
  "Telefono",
];

const cursos = [
  {
    nombre: "Curso 1",
    horas: "10",
  },
  {
    nombre: "Curso 2",
    horas: "10",
  },
];

const desplegablesCursos = [
  {
    desplegable: "Curso 1",
    nombre: "Juan",
    apellido: "Perez",
    direccion: "Calle falsa 123",
    localidad: "Ciudad",
    telefono: "123456789",
  },
  {
    desplegable: "Curso 1",
    nombre: "Pedro",
    apellido: "Perez",
    direccion: "Calle falsa 123",
    localidad: "Ciudad",
    telefono: "123456789",
  },
];

const encabezadosCursos = ["Nombre", "Horas"];
const nombreDesplegableCursos = "Estudiantes";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estudiantes: estudiantes,
      encabezadosEstudiantes: encabezadosEstudiantes,
      cursos: cursos,
      encabezadosCursos: encabezadosCursos,
      desplegablesCursos: desplegablesCursos,
      nombreDesplegableCursos: nombreDesplegableCursos,
    };
  }

  agregarEstudiante = (estudiante) => {
    const { estudiantes } = this.state;
    this.setState({ estudiantes: [...estudiantes, estudiante] });
  };

  inscribirEstudiantes = (estudiantes, curso) => {
    const { desplegablesCursos } = this.state;
    const nuevosEstudiantes = estudiantes.map((estudiante) => {
      return {
        desplegable: curso,
        ...estudiante,
      };
    });

    this.setState({
      desplegablesCursos: [...desplegablesCursos, ...nuevosEstudiantes],
    });
  };

  render() {
    const {
      pagina,
      filtroApellido,
      inscripcion,
      cursoInscripcion,
    } = this.props;

    const {
      estudiantes,
      cursos,
      encabezadosCursos,
      encabezadosEstudiantes,
      desplegablesCursos,
      nombreDesplegableCursos,
    } = this.state;
    return (
      <Container>
        {pagina === "Inicio" && <Inicio />}
        {pagina === "Cursos" && (
          <Cursos
            datos={cursos}
            encabezados={encabezadosCursos}
            desplegables={desplegablesCursos}
            nombreDesplegable={nombreDesplegableCursos}
            inscripcion={inscripcion}
          />
        )}
        {pagina === "Estudiantes" && (
          <Estudiantes
            datos={estudiantes}
            encabezados={encabezadosEstudiantes}
            filtroApellido={filtroApellido}
          />
        )}
        {pagina === "Inscripcion" && (
          <Inscripcion
            cursoInscripcion={cursoInscripcion}
            estudiantes={estudiantes}
            inscripciones={desplegablesCursos}
            inscribirEstudiantes={this.inscribirEstudiantes}
          />
        )}
      </Container>
    );
  }
}
