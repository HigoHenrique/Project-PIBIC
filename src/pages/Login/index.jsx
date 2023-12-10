import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoUnicap from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import "./styles.css";
import useAutenticate from "../../hooks/useAutenticate";


const theme = createTheme();

export default function Login() {
  const navigateTo = useNavigate();
  const {login} = useAutenticate();
  const [invalidMatricula, setInvalidMatricula] = React.useState(false);

  const handleClick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    login(email, password, setInvalidMatricula)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main id="main-container">
      <ThemeProvider theme={theme}>
        <div className="container">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "white",
              width: 450,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <img src="https://th.bing.com/th/id/OIP.vF9hJlUVMpk9xJ-e4Y1e-AAAAA?rs=1&pid=ImgDetMain" alt="Logo da UNICAP" />
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "var(--cor-secundary-1)" }}
            >
              PIBIC
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              style={{ height: 260, width: 380 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={invalidMatricula}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                error={invalidMatricula}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar do e-mail"
              />
            </Box>

            <Grid item>
                <Link to={navigateTo('/formProf')}>
                  {"Não possui conta ? Cadastre-se"}
                </Link>
              </Grid>



            <Button
              onClick={handleClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "var(--cor-primary-1)" }}
            >
              Entrar
            </Button>
          </Box>
        </div>
      </ThemeProvider>
    </main>
  );
}
