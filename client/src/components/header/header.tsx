import { Badge, BadgeProps, Box, Container, createTheme, CssBaseline, Grid, Link, Paper, styled, ThemeProvider } from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./header.css";
const theme = createTheme();

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 10,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="black-header">
          <Grid container xs={12} md={10} sx={{px: 1, py:1, }}>
            <Grid item  sm={8}>
                  <PhoneIcon fontSize="small" sx={{verticalAlign:"middle"}}/> &nbsp;0900 000 555 &emsp;
                  <EmailIcon fontSize="small" sx={{verticalAlign:"middle"}}/> &nbsp;brian.nguyen@gmail.com
            </Grid>
            <Grid item sm={4} sx={{textAlign:'right'}} >
                  <Link href="/login" sx={{textDecoration: 'none', color: "white"}}>Sign in</Link>&emsp;
                  <Link href="#" sx={{textDecoration: 'none', color: "white", mr:2}}>Your cart&nbsp;
                    <StyledBadge badgeContent={10} max={9} color="secondary">
                      <ShoppingCartIcon  fontSize="small" sx={{color: "white"}}/>
                    </StyledBadge>
                  </Link>
            </Grid>
          </Grid>
      </Box>
      <Grid container component="main" sx={{width: '100vw'}}>
        <Grid item xs component={Paper} square>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box component="img" sx={{ height: 40}}></Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Header;