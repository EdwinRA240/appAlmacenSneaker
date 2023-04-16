import React, { useState, useEffect } from "react";
import Tabla from "../components/Compras/TableCompras";

const Compras = () => {
  const [Compras, setCompras] = useState([]);
  const [Updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3200/compras")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCompras(responseJson);
        console.log(responseJson);
      });
  }, [Updated]);

  return (
    <>
      <Tabla data = {Compras} Updated={Updated} setUpdated={setUpdated}/>
    </>
  );
};

export default Compras;
