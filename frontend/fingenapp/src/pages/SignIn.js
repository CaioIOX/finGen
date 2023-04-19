import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import $ from 'jquery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'js-cookie';
import Loading from '../components/Loading';
import { userLogin, login } from '../services/api';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../pages/dashboard";

const theme = createTheme();

export default function SignIn() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Verifica se há user ou senha nos cookies para carregar nos campos
  window.addEventListener('load', () => {
    const user = Cookies.get('user');
    const password = Cookies.get('password');
      
    if (user && password && rememberMe === 'true') {
      // Preenche automaticamente os campos com os valores salvos nos cookies
      $('#user').val(user);
      $('#password').val(password);
    }
  });

  // O que acontece ao apertar enter
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); 
    const inputUser = data.get('user');
    const inputPassword = data.get('password');

    var token = null;
    var user = null;
    if ($('#rememberMe').is(":checked")) {
      rememberMe(inputUser, inputPassword);
    } else {
      Cookies.remove('user');
      Cookies.remove('password');
    }

    try {
      token = await login({
        username: inputUser,
        password: inputPassword,
      })
      
    } catch (error) {
      setError(error.message);
      if (error.response.status === 400) {
        setError('Os campos de usuário e senha precisam estar preenchidos.');
      }
      if (error.response.status === 401) {
        setError('Acesso negado.');
      }

      return
    }
    Cookies.set('token', token.access);
    
   // user = await userLogin({
   //   username: inputUser,
  //    password: inputPassword,
  //  });
        
    
    return (
      <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    );
  };

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {isLoading ? (
        <Loading />
      ) : (
        <><CssBaseline /><Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar><Typography component="h1" variant="h5">
                Cadastro
              </Typography><Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="user"
                  label="Usuário"
                  name="user"
                  autoComplete="email"
                  autoFocus />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password" />
                <FormControlLabel

                  control={<Checkbox id="rememberMe" value="remember" color="primary" />}
                  label="Lembre de mim" />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Entrar

                </Button>
                {error && (
                  <Snackbar open={error != null} autoHideDuration={6000} onClose={() => setError(null)}>
                    <Alert severity="error" onClose={() => setError(null)}>
                      {error}
                    </Alert>
                  </Snackbar>
                )}
                <Grid container>
                  <Grid item>
                    <Link href="/SignUp" variant="body2">
                      {"Não possui uma conta? Cadastre-se"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box></>
      )}
      </Container>
    </ThemeProvider>
    
  );
}

export function rememberMe(user, password) {
  Cookies.set('user', user);
  Cookies.set('password', password);
}