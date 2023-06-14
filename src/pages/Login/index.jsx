import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoUnicap from "./logo-1-unicap.png";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const navigateTo = useNavigate();
  const [invalidMatricula, setInvalidMatricula] = React.useState(false);

  const handleClick = async () => {
    const response = await fetch("https://pibicdb-barbosaerick88.b4a.run/alunos/");
    const data = await response.json();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const aluno = data.find((aluno) => aluno.email === email && aluno.matricula === password);

    if (aluno) {
      navigateTo("/home");
    } else {
      setInvalidMatricula(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logoUnicap} alt="Logo da UNICAP" />
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
            sx={{ mt: 1 }}
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
              label="Matricula"
              type="password"
              id="password"
              autoComplete="current-password"
              error={invalidMatricula}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar do e-mail"
            />

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/form" variant="body2">
                  {"Não possui conta ? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
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
      </Container>
    </ThemeProvider>
  );
}
