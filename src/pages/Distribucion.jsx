import React, { useState, useEffect } from "react";
import Tabla from "../components/Distribucion/TableDistribucion";

const Distribucion = () => {
  const [Distribucion, setDistribucion] = useState([]);
  const [Updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("http://192.168.43.2:3200/distribucion")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setDistribucion(responseJson);
        console.log(responseJson);
      });
  }, [Updated]);

  return (
    <>
      <Tabla data = {Distribucion} Updated={Updated} setUpdated={setUpdated}/>
    </>
  );
};

export default Distribucion;
