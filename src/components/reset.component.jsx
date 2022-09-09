import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link as _link} from "react-router-dom";
import { auth, sendPasswordReset } from "../utils/firebase/firebase.utils";
import {Button, CssBaseline, Avatar, TextField, FormControlLabel, Checkbox, Grid, Link, Box,Typography, Container} from '@mui/material';

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const handleSubmit = (event) =>
  {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      sendPasswordReset(data.get("email"))
  };

  return (
    <Container component="main" maxWidth="xs">
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
      <Typography component="h1" variant="h5">
        Reset Password
    </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb:2 }}
          color="secondary"
        >
          Send Password Reset Email
        </Button>
        <Grid container>
        <Grid item xs>
        <Link href="/login" variant="body2" color="primary">
          Go back to Sign In
        </Link>
        </Grid>
          <Grid item>
            <Link href="/register" variant="body2" color="primary">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
  );
}
export default Reset;
