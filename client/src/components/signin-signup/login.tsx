import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CopyRight from "../common/copyright";
import BackgroundSide from "./side";

const theme = createTheme();

const Login: React.FC = () => {

  const handleSubmit = () => {
    
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{height: '100vh'}}>
        <CssBaseline />
        <BackgroundSide item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 10, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{m:1, bgcolor: 'limegreen'}}/>
            <Typography component="h1" variant="h5">{'Sign In'}</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:2}}>
              <TextField
                margin= "normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin= "normal"
                fullWidth
                id="password"
                type="password"
                label="Password"
                name="password"
                autoComplete="current-password"
              />
              <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
              <Button type="submit" fullWidth variant="contained" sx={{ mt:3, mb:2}}>{'Sign In'}</Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">{'Forgot Password'}</Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">{'Create an account'}</Link>
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


export default Login;