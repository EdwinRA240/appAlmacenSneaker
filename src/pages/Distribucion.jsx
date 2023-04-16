import React, { useState, useEffect } from "react";
import Tabla from "../components/Compras/TableCompras";

const Compras = () => {
  const [Compras, setCompras] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/compras")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCompras(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <Tabla data = {Compras}/>
    </>
  );
};

export default Compras;
