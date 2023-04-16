import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
// import AlertDialogDeleteEmpleado from "./AlertDialogDeleteEmpleado";
// import AlertDialogUpdateEmpleado from "./AlertDialogUpdateEmpleado";
import RefreshIcon from "@mui/icons-material/Refresh";
import NavBar from "../NavBar";

export default function TableB(props) {
  const handleRefresh = () => {
    props.setUpdated(!props.Updated);
  };
  return (
    <>
    <NavBar/>
    <Container maxWidth="xlg" sx={{ mt: 12, mb: 5 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">MARCA</TableCell>
              <TableCell align="center">MODELO</TableCell>
              <TableCell align="center">PRECIO</TableCell>
              <TableCell align="center">TALLA</TableCell>
              <TableCell align="center">PROPOSITO</TableCell>
              <TableCell align="center">GENERO</TableCell>
              <TableCell align="center">STOCK</TableCell>
              {/* <TableCell align="center">
                <AlertDialogAddDireccion data={props.data.rows} />
              </TableCell> */}
              <TableCell align="center">
                <IconButton onClick={handleRefresh}>
                  <RefreshIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((e) => (
              <TableRow
                key={e.CLAVE}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{e.MARCA}</TableCell>
                <TableCell align="center">{e.MODELO}</TableCell>
                <TableCell align="center">{(e.PRECIO).toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})}</TableCell>
                <TableCell align="center">{e.TALLA}</TableCell>
                <TableCell align="center">{e.PROPOSITO}</TableCell>
                <TableCell align="center">{e.GENERO}</TableCell>
                <TableCell align="center">{e.STOCK}</TableCell>
                {/* <TableCell align="center">
                  <AlertDialogDeleteEmpleado data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateEmpleado data={e} />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
}
