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
import NavBar2 from "../NavBar2";
// import AlertDialogAddDireccion from "./AlertDialogAddEmpleado";

export default function TableB(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };
  return (
    <>
    <NavBar2/>
    <Container maxWidth="lg" sx={{ mt: 12, mb: 5 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell textAlign="center">MARCA</TableCell>
              <TableCell textAlign="center">MODELO</TableCell>
              <TableCell textAlign="center">PRECIO</TableCell>
              <TableCell textAlign="center">TALLA</TableCell>
              <TableCell textAlign="center">PROPOSITO</TableCell>
              <TableCell textAlign="center">GENERO</TableCell>
              <TableCell textAlign="center">STOCK</TableCell>
              {/* <TableCell textAlign="center">
                <AlertDialogAddDireccion data={props.data.rows} />
              </TableCell> */}
              <TableCell textAlign="center">
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
                <TableCell textAlign="center">{e.MARCA}</TableCell>
                <TableCell textAlign="center">{e.MODELO}</TableCell>
                <TableCell textAlign="center">{e.PRECIO}</TableCell>
                <TableCell textAlign="center">{e.TALLA}</TableCell>
                <TableCell textAlign="center">{e.PROPOSITO}</TableCell>
                <TableCell textAlign="center">{e.GENERO}</TableCell>
                <TableCell textAlign="center">{e.STOCK}</TableCell>
                {/* <TableCell textAlign="center">
                  <AlertDialogDeleteEmpleado data={e} />
                </TableCell>
                <TableCell textAlign="center">
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
