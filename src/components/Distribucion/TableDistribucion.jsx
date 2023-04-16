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
import AlertDialogAddDistribucion from "./AlertDialogAddDistribucion";

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
              <TableCell align="center">FECHA</TableCell>
              <TableCell align="center">MARCA</TableCell>
              <TableCell align="center">MODELO</TableCell>
              <TableCell align="center">TALLA</TableCell>
              <TableCell align="center">CANTIDAD</TableCell>
              <TableCell align="center">SUCURSAL</TableCell>
              <TableCell align="center">ESTADO</TableCell>
              <TableCell align="center">ALCAL_MUN</TableCell>
              <TableCell align="center">CODIGO_POSTAL</TableCell>
              <TableCell align="center">CALLE</TableCell>
              <TableCell align="center">NUMERO_EXT</TableCell>
              <TableCell align="center">NUMERO_INT</TableCell>
              <TableCell align="center">
                <AlertDialogAddDistribucion data={props.data} handleRefresh = {handleRefresh}/>
              </TableCell>
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
                <TableCell align="center">{(e.FECHA).match(/^\d{4}-\d{2}-\d{2}/)[0]}</TableCell>
                <TableCell align="center">{e.MARCA}</TableCell>
                <TableCell align="center">{e.MODELO}</TableCell>
                <TableCell align="center">{e.TALLA}</TableCell>
                <TableCell align="center">{e.CANTIDAD}</TableCell>
                <TableCell align="center">{e.SUCURSAL}</TableCell>
                <TableCell align="center">{e.ESTADO}</TableCell>
                <TableCell align="center">{e.ALCAL_MUN}</TableCell>
                <TableCell align="center">{e.CODIGO_POSTAL}</TableCell>
                <TableCell align="center">{e.CALLE}</TableCell>
                <TableCell align="center">{e.NUMERO_EXT}</TableCell>
                <TableCell align="center">{e.NUMERO_INT}</TableCell>
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
