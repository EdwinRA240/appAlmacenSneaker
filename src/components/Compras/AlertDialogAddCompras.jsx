import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Button, FormGroup, TextField } from "@mui/material";
import { React, useEffect, useState } from "react";
import CatalogoPago from "../Catalogos/CatalogoPago";
import CatalogoProveedor from "../Catalogos/CatalogoProveedor";
import CatalogoSneaker from "../Catalogos/CatalogoSneaker";
// import FormControlSucursal from "../Catalogos/FormControlSucursal";
// import FormControlCargo from "../Catalogos/FormControlCargo";

export default function AlertDialogAddCompras() {
  const [Cpago, setCpago] = useState([]);
  const [Pago, setPago] = useState(1);
  const [Cproveedor, setCproveedor] = useState([]);
  const [Proveedor, setProveedor] = useState(1);
  const [Csneaker, setCsneaker] = useState([]);
  const [Sneaker, setSneaker] = useState(1);
  const [Cantidad, setCantidad] = useState(1);
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    PAGO: 1,
    PROVEEDOR: 1,
    SNEAKER: 1,
    CANTIDAD: 1,
  });

  useEffect(() => {
    fetch("http://localhost:3200/catalogoPago")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCpago(responseJson);
        console.log(responseJson);
      });

    fetch("http://localhost:3200/catalogoProveedor")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCproveedor(responseJson);
        console.log(responseJson);
      });

      fetch("http://localhost:3200/catalogoSneaker")
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
      PAGO: Number(Pago),
      PROVEEDOR: Number(Proveedor),
      SNEAKER: Number(Sneaker),
      CANTIDAD: Number(Cantidad),
    });
    console.log(Data);
  };
  const handleSQL = () => {
    fetch("http://localhost:3200/compras", {
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
        window.location.reload(false); //refresh
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
        <DialogTitle id="alert-dialog-title">Agregar nueva compra</DialogTitle>
        <DialogContent>
          <FormGroup>
            <CatalogoPago
              nombre={"Pago"}
              opciones={Cpago}
              funcion={(hijo) => {
                setPago(hijo);
                console.log(hijo);
              }}
            />
            <CatalogoProveedor
              nombre={"Proveedor"}
              opciones={Cproveedor}
              funcion={(hijo) => {
                setProveedor(hijo);
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
