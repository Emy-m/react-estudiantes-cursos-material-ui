import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";

function Row(props) {
  const { row, desplegables, nombreDesplegable, inscripcion } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {desplegables && (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        )}
        <TableCell>{row.nombre}</TableCell>
        <TableCell>{row.horas}</TableCell>
      </TableRow>
      {desplegables && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {nombreDesplegable + " " + desplegables.length}
                </Typography>
                <Table size="small" aria-label="estudiantes">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Apellido</TableCell>
                      <TableCell>Direccion</TableCell>
                      <TableCell>Localidad</TableCell>
                      <TableCell>Telefono</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {desplegables &&
                      desplegables.map((desplegable) => (
                        <TableRow key={desplegable.nombre}>
                          <TableCell component="th" scope="row">
                            {desplegable.nombre}
                          </TableCell>
                          <TableCell>{desplegable.apellido}</TableCell>
                          <TableCell>{desplegable.direccion}</TableCell>
                          <TableCell>{desplegable.localidad}</TableCell>
                          <TableCell>{desplegable.telefono}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <IconButton
                  onClick={() => {
                    inscripcion(row.nombre);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
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
    const {
      datos,
      encabezados,
      desplegables,
      nombreDesplegable,
      inscripcion,
    } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {desplegables && <TableCell />}
              {encabezados.map((encabezado) => (
                <TableCell key={encabezado}>{encabezado}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datos.map((dato) =>
              desplegables ? (
                <Row
                  key={dato.name}
                  row={dato}
                  desplegables={desplegables.filter((desplegable) => {
                    return desplegable.desplegable === dato.nombre;
                  })}
                  nombreDesplegable={nombreDesplegable}
                  inscripcion={inscripcion}
                />
              ) : (
                <Row key={dato.name} row={dato} inscripcion={inscripcion} />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
