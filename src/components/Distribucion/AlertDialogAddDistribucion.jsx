import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import CatalogoPago from "../Catalogos/CatalogoPago";
import CatalogoSucursal from "../Catalogos/CatalogoSucursal";
import CatalogoSneaker from "../Catalogos/CatalogoSneaker";
// import FormControlSucursal from "../Catalogos/FormControlSucursal";
// import FormControlCargo from "../Catalogos/FormControlCargo";

export default function AlertDialogAddCompras(props) {
  const [CSucursal, setCSucursal] = useState([]);
  const [Sucursal, setSucursal] = useState(1);
  const [Csneaker, setCsneaker] = useState([]);
  const [Sneaker, setSneaker] = useState(1);
  const [Cantidad, setCantidad] = useState(1);
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    SUCURSAL: 1,
    SNEAKER: 1,
    CANTIDAD: 1,
  });

  useEffect(() => {

    fetch("http://192.168.43.2:3200/catalogoSucursal")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCSucursal(responseJson);
        console.log(responseJson);
      });

      fetch("http://192.168.43.2:3200/catalogoSneaker")
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          setCsneaker(responseJson);
          console.log(responseJson);
        });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetData = () => {
    setData({
      SUCURSAL: Number(Sucursal),
      SNEAKER: Number(Sneaker),
      CANTIDAD: Number(Cantidad),
    });
    console.log(Data);
  };
  const handleSQL = () => {
    fetch("http://192.168.43.2:3200/distribucion", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        handleClose();
        props.handleRefresh();
      });
  };
  return (
    <>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="alert-dialog-title">Agregar nueva distribucion</DialogTitle>
        <DialogContent>
          <FormGroup>
            <CatalogoSucursal
              nombre={"Sucursal"}
              opciones={CSucursal}
              funcion={(hijo) => {
                setSucursal(hijo);
                console.log(hijo);
              }}
            />
            <CatalogoSneaker
              nombre={"Sneaker"}
              opciones={Csneaker}
              funcion={(hijo) => {
                setSneaker(hijo);
                console.log(hijo);
              }}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Numero"
              onChange={(event) => {setCantidad(event.target.value);
                console.log(event.target.value);}}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onFocus={handleSetData} onClick={handleSQL} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
