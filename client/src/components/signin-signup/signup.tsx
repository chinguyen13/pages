import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CopyRight from "../common/copyright";
import BackgroundSide from "./side";

const theme = createTheme();

const SignUp: React.FC = () => {

  const handleSubmit = () => {
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{height: '100vh'}}>
        <CssBaseline />
        <BackgroundSide item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 10, mx: 7, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{m:1, bgcolor: 'purple'}}/>
            <Typography component="h1" variant="h5">{'Sign Up'}</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:2}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt:3, mb:2}}>{'Sign up'}</Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">{'Already have an account? Sign in'}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CopyRight sx={{mt:5}}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default SignUp;