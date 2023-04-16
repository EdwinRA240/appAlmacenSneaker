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
import AlertDialogAddCompras from "./AlertDialogAddCompras";

export default function TableB(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };
  return (
    <>
    <NavBar/>
    <Container maxWidth="lg" sx={{ mt: 12, mb: 5 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell textalign="center">FECHA</TableCell>
              <TableCell textalign="center">PROVEEDOR</TableCell>
              <TableCell textalign="center">MARCA</TableCell>
              <TableCell textalign="center">MODELO</TableCell>
              <TableCell textalign="center">TALLA</TableCell>
              <TableCell textalign="center">PAGO</TableCell>
              <TableCell textalign="center">CANTIDAD</TableCell>
              <TableCell textalign="center">PRECIO</TableCell>
              <TableCell textalign="center">TOTAL</TableCell>
              <TableCell textalign="center">
                <AlertDialogAddCompras data={props.data} />
              </TableCell>
              <TableCell textalign="center">
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
                <TableCell textalign="center">{(e.FECHA).match(/^\d{4}-\d{2}-\d{2}/)[0]}</TableCell>
                <TableCell textalign="center">{e.PROVEEDOR}</TableCell>
                <TableCell textalign="center">{e.MARCA}</TableCell>
                <TableCell textalign="center">{e.MODELO}</TableCell>
                <TableCell textalign="center">{e.TALLA}</TableCell>
                <TableCell textalign="center">{e.PAGO}</TableCell>
                <TableCell textalign="center">{e.CANTIDAD}</TableCell>
                <TableCell textalign="center">{(e.PRECIO).toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})}</TableCell>
                <TableCell textalign="center">{(e.TOTAL).toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})}</TableCell>
                {/* <TableCell textalign="center">
                  <AlertDialogDeleteEmpleado data={e} />
                </TableCell>
                <TableCell textalign="center">
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
