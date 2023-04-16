import React, { useState, useEffect } from "react";
import Tabla from "../components/Almacen/TableAlmacen";

const Almacen = () => {
  const [Almacen, setAlmacen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/Almacen")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setAlmacen(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <Tabla data = {Almacen}/>
    </>
  );
};

export default Almacen;
