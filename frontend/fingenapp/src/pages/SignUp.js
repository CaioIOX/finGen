import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import $ from 'jquery'
import Loading from '../components/Loading';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUser } from '../services/api';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'FinGen '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();

export default function SignUp() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inputUser = data.get('username');
    const inputEmail = data.get('email');
    const inputPassword = data.get('password');
    const inputFirstName = data.get('firstName');
    const inputLastName = data.get('lastName');

    if (!$('#accessTerms').is(":checked")) {
      setError('Você precisa aceitar os termos da convenção de genebra.');  
      return;
    }

    if (!inputUser || !inputEmail || !inputPassword || !inputFirstName || !inputLastName) {
      setError('Todos os campos precisam estar preenchidos.');
      return;
    }
    
    try {
      var user = createUser({
        username: inputUser,
        password: inputPassword,
        email: inputEmail,
        first_name: inputFirstName,
        last_name: inputLastName
      });
    } catch(error) {
      setError('Falha ao tentar cadastrar');
      console.log(error);
      return;
    }
    console.log(user);
    
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
              </Avatar>
              <Typography component="h1" variant="h5">
                Cadastro
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Nome"
                      autoFocus />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Sobrenome"
                      name="lastName"
                      autoComplete="family-name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Endereço de email"
                      name="email"
                      autoComplete="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="username"
                      name="username"
                      autoComplete="username" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="new-password" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox id="accessTerms" value="allowAccessTerms" color="primary" required />}
                      label="Li e aceito as convenções de genebra." />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Cadastrar
                </Button>
                {error && (
                  <Snackbar open={error != null} autoHideDuration={6000} onClose={() => setError(null)}>
                    <Alert severity="error" onClose={() => setError(null)}>
                      {error}
                    </Alert>
                  </Snackbar>
                )}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      Já possui uma conta? Entre
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box><Copyright sx={{ mt: 5 }} /></>
      )}
      </Container>
    </ThemeProvider>
  );
}