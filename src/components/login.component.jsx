import React, { useEffect, useState } from "react";
import GoogleButton from 'react-google-button';
import {Button, CssBaseline, Avatar, TextField, FormControlLabel, Checkbox, Grid, Link, Box,Typography, Container} from '@mui/material';
import { Link as _link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        logInWithEmailAndPassword(data.get("email"),data.get("password"))
    };

    return( <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      sx={{mb:2,mt:2,}}
    >
    <Typography component="h4" variant="h5">
      Engelsiz Oyunlar
    </Typography>
    </Grid>

      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Adresi"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Şifre"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Beni Hatırla"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, textTransform:'none' }}
          color="secondary"
        >
          Giriş Yap
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/reset" variant="body2" color="primary">
              Şifreni mi unuttun?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2" color="primary">
              {"Hesabın yok mu? Kaydol"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>)
}

export default Login;
