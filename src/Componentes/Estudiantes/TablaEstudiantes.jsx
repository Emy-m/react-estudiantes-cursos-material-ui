import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Row(props) {
  const { row, textoMarcado } = props;

  const getHighlightedText = (text) => {
    //Separa el texto pasado por parametro en un array de palabras incluyendo el texto a marcar
    const parts = text.split(new RegExp(`(${textoMarcado})`, "gi"));
    return (
      <span>
        {" "}
        {parts.map((part, i) => (
          // Por cada parte del texto se crea un span con el texto
          // Si esta parte coincide con el texto a marcar se le agrega el estilo negrita
          // Seria como un pipe en angular, en react es una funcion entre {}
          <span
            key={i}
            style={
              part.toLowerCase() === textoMarcado.toLowerCase()
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>
        ))}{" "}
      </span>
    );
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.nombre}
        </TableCell>
        <TableCell>
          {textoMarcado ? getHighlightedText(row.apellido) : row.apellido}
        </TableCell>
        <TableCell>{row.direccion}</TableCell>
        <TableCell>{row.localidad}</TableCell>
        <TableCell>{row.telefono}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

/* Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}; */

export default class CollapsibleTable extends React.Component {
  render() {
    const { datos, encabezados, textoMarcado } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {encabezados.map((encabezado) => (
                <TableCell key={encabezado}>{encabezado}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos.map((dato) => (
              <Row key={dato.name} row={dato} textoMarcado={textoMarcado} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
