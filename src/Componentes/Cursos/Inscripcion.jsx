import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Button, Container } from "@mui/material";
import React, { Component } from "react";

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    };
  }

  inscriptos = () => {
    const { cursoInscripcion, inscripciones } = this.props;
    return inscripciones
      .filter((inscripcion) => {
        return inscripcion.desplegable === cursoInscripcion;
      })
      .map((inscripcion) => {
        const { desplegable, ...estudiante } = inscripcion;
        return estudiante;
      });
  };

  listaEstudiantes = () => {
    const { estudiantes } = this.props;
    const inscriptos = this.inscriptos();
    return estudiantes.filter(
      (estudiante) =>
        !inscriptos.find(
          (inscripto) =>
            inscripto.nombre === estudiante.nombre &&
            inscripto.apellido === estudiante.apellido
        )
    );
  };

  handleToggle = (value) => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { checked } = this.state;
    const { inscribirEstudiantes, cursoInscripcion } = this.props;
    const estudiantes = this.listaEstudiantes();

    return (
      <Container>
        {cursoInscripcion ? (
          <Container>
            <h1>Inscripcion a {cursoInscripcion}</h1>
            <h3>Estudiantes</h3>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {estudiantes.map((estudiante) => {
                const labelId = `checkbox-list-label-${estudiante.nombre}`;

                return (
                  <ListItem key={estudiante.nombre} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={this.handleToggle(estudiante)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(estudiante) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={estudiante.nombre + " " + estudiante.apellido}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        ) : (
          <Container>
            <h1>Seleccione un curso</h1>
          </Container>
        )}
        <Container>
          <Button
            variant="contained"
            disabled={checked.length > 0 ? false : true}
            onClick={() => {
              inscribirEstudiantes(checked, cursoInscripcion);
              this.setState({ checked: [] });
            }}
          >
            Inscribir
          </Button>
        </Container>
      </Container>
    );
  }
}
