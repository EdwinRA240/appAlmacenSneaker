import React, { useState, useEffect } from "react";
import Tabla from "../components/Almacen/TableAlmacen";

const Almacen = () => {
  const [Almacen, setAlmacen] = useState([]);
  const [Updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("http://192.168.43.2:3200/Almacen")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setAlmacen(responseJson);
        console.log(responseJson);
      });
  }, [Updated]);

  return (
    <>
      <Tabla data={Almacen} Updated={Updated} setUpdated={setUpdated} />
    </>
  );
};

export default Almacen;
