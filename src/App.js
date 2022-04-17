import React, { Component } from 'react';
import ResponsiveAppBar from './Componentes/ResponsiveAppBar';
import Body from './Componentes/Body';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paginas: ["Estudiantes", "Cursos"],
      pagina: "Inicio",
      filtroApellido: "",
      cursoInscripcion: ""
    }
  }

  cambiarPagina = (pagina) => {
    this.setState({
      pagina: pagina
    })
  }

  filtrarEstudiantes = (event) => {
    this.setState({
      filtroApellido: event.target.value,
      pagina: "Estudiantes"
    })
  }

  inscripcion = (curso) => {
    this.setState({
      cursoInscripcion: curso,
      pagina: "Inscripcion"
    })
  }

  render(){
    const { pagina, paginas, filtroApellido, cursoInscripcion } = this.state;
    return (
      <div>
        <ResponsiveAppBar paginas={paginas} cambiarPagina={this.cambiarPagina} filtrarEstudiantes={this.filtrarEstudiantes} />
        <Body inscripcion={this.inscripcion} cursoInscripcion={cursoInscripcion} pagina={pagina} filtroApellido={filtroApellido} />
      </div>
    );
  }
}
