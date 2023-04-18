import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Almacen_Sneaker "}
      <Link color="inherit" href="https://mui.com/"></Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [credentials, setCredentials] = useState({
    Usuario: '',
    Contraseña: '',
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría tu código de validación de inicio de sesión
    if (credentials.Usuario === 'root' && credentials.Contraseña === 'Mysql123.') {
      window.location.href = '/Almacen';
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ mt: 15, mb: 5 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Administrador
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              name="Usuario"
              label="Usuario"
              autoComplete="Usuario"
              // value={credentials.Usuario}
              onChange = {handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="Contraseña"
              label="Contraseña"
              type="Password"
              // value={credentials.password}
              onChange = {handleChange}
              autoComplete="current-Contraseña"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar"
            />
            <Button
              onClick = {handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes una cuenta? Registrar"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
