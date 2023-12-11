import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoUnicap from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { Container } from "@mui/material";

const theme = createTheme();

export default function ChoseLogin() {
  const navigateTo = useNavigate();

  const handleAluno = () => {
    navigateTo("/aluno");
   
  };

  const handleProf = () => {
    navigateTo("/login");
  };

  return (
    <main id="main-container">
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "60%",
            width: "100%",
          }}
        >
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
            <img src="https://th.bing.com/th/id/OIP.vF9hJlUVMpk9xJ-e4Y1e-AAAAA?rs=1&pid=ImgDetMain" />
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "var(--cor-secundary-1)" }}
            >
              PIBIC
            </Typography>
            <div>
              <Button
                onClick={handleAluno}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "var(--cor-primary-1)" }}
              >
                Sou Discente
              </Button>
              <Button
                onClick={handleProf}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "var(--cor-primary-1)" }}
              >
                Sou Docente
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </main>
  );
}
