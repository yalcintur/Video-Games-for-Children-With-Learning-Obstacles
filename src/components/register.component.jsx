import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as _link, useNavigate } from "react-router-dom";

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../utils/firebase/firebase.utils";
import GoogleButton from 'react-google-button';



function Register() {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [ogrenmeGuclugu, setOgrenmeGuclugu] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (event) => {
    setOgrenmeGuclugu(event.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login");
  }, [user, loading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get('firstName') && !data.get('lastName')) { alert("Please enter name") };
    const name = data.get('firstName') + ' ' + data.get('lastName')
    registerWithEmailAndPassword(data.get('veliAdSoyad'), data.get('adSoyad'), data.get('email'), data.get('email'), data.get('telefon'), data.get('city'), ogrenmeGuclugu);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      lastName: data.get('lastName'),
      firstName: data.get('firstName'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mb: 3 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color:'secondary.main',mb: 2 }}>
            Kayıt ol
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="adSoyad"
                  required
                  fullWidth
                  id="adSoyad"
                  label="Ad Soyad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="veliAdSoyad"
                  label="Veli Adı Soyadı"
                  name="veliAdSoyad"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="city-name"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="Şehrin"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                autoComplete="city-name"
                name="telefon"
                required
                fullWidth
                id="telefon"
                label="Telefon Numaran"
                autoFocus
              />
            </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Öğrenme Güçlüğü</InputLabel>
                  <Select
                    labelId="ogrenmeGuclugu"
                    id="ogrenmeGuclugu"
                    value={ogrenmeGuclugu}
                    label="Öğrenme Güçlüğü"
                    required
                    onChange={handleChange}
                  >
                  <MenuItem value={"Otizm"}>Otizm</MenuItem>
                  <MenuItem value={"Down Sendromu"}>Down Sendromu</MenuItem>
                  <MenuItem value={"Disleksi"}>Disleksi</MenuItem>
                  <MenuItem value={"Disgrafi"}>Disgrafi</MenuItem>
                  <MenuItem value={"Diskalkuli"}>Diskalkuli</MenuItem>
                  <MenuItem value={"Afazi"}>Afazi</MenuItem>
                  <MenuItem value={"Diğer"}>Diğer</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email adresin"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Şifren"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Kayıt olma şartlarını kabul ediyorum."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography sx={{color:'white', textTransform: 'none'}}>Kayıt Ol</Typography>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" color="primary">
                  Zaten hesabın var mı? Giriş Yap
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
