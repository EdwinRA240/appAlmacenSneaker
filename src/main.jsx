import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar2 /> <SignIn />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/Empleado" element={<Empleado />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
