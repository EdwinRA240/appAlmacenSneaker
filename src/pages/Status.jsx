import React, { useState, useEffect } from "react";
import Tabla from "../components/Status/TableStatus";

const Status = () => {
  const [Status, setStatus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/status")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setStatus(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <Tabla data = {Status}/>
    </>
  );
};

export default Status;
