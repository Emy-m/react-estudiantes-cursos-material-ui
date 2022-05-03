import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FormularioEstudiante(props) {
  const { agregarEstudiante } = props;
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    localidad: "",
    telefono: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    agregarEstudiante(estudiante);
  }

  function handleChange(e) {
    if (e.target.name === "nombre") {
      setEstudiante({ ...estudiante, nombre: e.target.value });
    } else if (e.target.name === "apellido") {
      setEstudiante({ ...estudiante, apellido: e.target.value });
    } else if (e.target.name === "direccion") {
      setEstudiante({ ...estudiante, direccion: e.target.value });
    } else if (e.target.name === "localidad") {
      setEstudiante({ ...estudiante, localidad: e.target.value });
    } else if (e.target.name === "telefono") {
      setEstudiante({ ...estudiante, telefono: e.target.value });
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h3>Ingrese los datos del nuevo estudiante</h3>
      <TextField
        required
        id="outlined-required"
        label="Nombre"
        name="nombre"
        defaultValue={estudiante.nombre}
        onChange={handleChange}
        value={estudiante.nombre}
      />
      <TextField
        required
        id="outlined-required"
        label="Apellido"
        name="apellido"
        defaultValue={estudiante.apellido}
        onChange={handleChange}
        value={estudiante.apellido}
      />
      <TextField
        required
        id="outlined-required"
        label="Direccion"
        name="direccion"
        defaultValue={estudiante.direccion}
        onChange={handleChange}
        value={estudiante.direccion}
      />
      <TextField
        required
        id="outlined-required"
        label="Localidad"
        name="localidad"
        defaultValue={estudiante.localidad}
        onChange={handleChange}
        value={estudiante.localidad}
      />
      <TextField
        required
        id="outlined-required"
        label="Telefono"
        name="telefono"
        defaultValue={estudiante.telefono}
        onChange={handleChange}
        value={estudiante.telefono}
      />

      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        onClick={handleSubmit}
        type="submit"
      >
        Agregar
      </Button>
    </Box>
  );
}
