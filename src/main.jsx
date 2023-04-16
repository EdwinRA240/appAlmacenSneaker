import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import Almacen from "./pages/Almacen";
import Compras from "./pages/Compras";
import Distribucion from "./pages/Distribucion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavBar2 /> <NotFound />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <NavBar2 /> <SignIn />
            </>
          }
        />

        <Route path="/Almacen" element={<Almacen />} />
        <Route path="/Compras" element={<Compras />} />
        {/* <Route path="/Distribucion" element={<Distribucion />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
