import { AppBar, Badge, BadgeProps, Box, createTheme, CssBaseline, Grid, IconButton, Link, styled, TextField, ThemeProvider, Toolbar } from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, { useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SnackbarError from "../snackbar/snackbar-error";
import logo from "./logo192.png"
import MakeDrawer from "./drawer";
import CONSTANTS from "../common/constants";
import ShowMenu from "./menu";
const theme = createTheme();

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -6,
    top: 10,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const useStyles = makeStyles(({
  noBorder: {
    border: "none",
  },
  whiteText:{
    color: "white",
  },
  form:{
    display:'block',
    maxWidth: 800,
    backgroundColor: "#58C5C7",
    borderRadius: 25,
    padding: "4px 0"
  },
  searchButton: {
    color: "white",
    height: 40, 
    width: 40,
    marginRight:5,
    backgroundColor:"black",
    "&:hover": {
      backgroundColor:"white", color:'black'
    }
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  const [message, setMessage] = useState({
    open: false,
    message: ''
  })

  const handleClose = () => {
    setMessage({
      ...message,
      open: false
    })
  }

  const onDrawerClose = () => {
    setIsDrawOpen(false);
  }
  
  const handleSearch = (e: any) => {
    e.preventDefault();
    if(!searchValue)
    {
      setMessage({
        open: true,
        message: "Please enter the field to search"
      })
    }else
    {
      setMessage({
        open: true,
        message: "Please ahihi"
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarError open={message.open} message={message.message} handleClose={handleClose}/>
      <Box 
        sx={{
          width: '100vw',
          bgcolor:'black',
          color: 'white',
          fontSize: '15px',
          flexDirection: 'column',
          alignItems: 'center',
          display:{xs:'none', md:'flex'}
      }}>
          <Grid container sx={{px: 1, py:1, fontSize: "13px", pl:"10%", pr:"10%" }}>
            <Grid item  sm={8}>
                  <PhoneIcon fontSize="small" sx={{verticalAlign:"middle"}}/> &nbsp;{CONSTANTS.PHONE_NUMBER}&emsp;&emsp;
                  <EmailIcon fontSize="small" sx={{verticalAlign:"middle"}}/> &nbsp;{CONSTANTS.EMAIL}
            </Grid>
            <Grid item sm={4} sx={{textAlign:'right'}} >
                  <Link href="/login" sx={{textDecoration: 'none', color: "white"}}>Sign In</Link>&emsp;&emsp;
                  <Link href="#" sx={{textDecoration: 'none', color: "white", mr:2}}>Your Cart&nbsp;
                    <StyledBadge badgeContent={10} max={9} color="secondary">
                      <ShoppingCartIcon  fontSize="small" sx={{color: "white"}}/>
                    </StyledBadge>
                  </Link>
            </Grid>
          </Grid>
      </Box>
      <AppBar position="static" sx={{bgcolor: "white", width: '100vw'}}>
        <Toolbar>
          <Grid container md={10} sx={{margin:"auto"}}>
            <Box sx={{display: {md:'none'}}}>
              <IconButton  onClick={() => setIsDrawOpen(!isDrawOpen)} size="large" edge="start" sx={{color: "black"}} aria-label="open drawer">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              component="img"
              sx={{
                height: "50px",
                display:{xs:'none', md:'inherit'}
              }}
              alt="Logo"
              src={logo}/>
            <ShowMenu />
            <Box
              component="form" 
              onSubmit={handleSearch} 
              sx={{
                width: "230px",
                marginLeft:"auto",
                marginRight: "0",
                backgroundColor: "#58C5C7",
                borderRadius: 10,
                padding: "4px 0"
              }}>
              <TextField 
                placeholder="Search"
                variant="standard"
                size="small"
                name="search"
                id="search"
                autoComplete="off"
                InputProps={{
                  className: classes.whiteText,
                  disableUnderline: true
                }}
                sx={{mr:2, pl:3, pt:1.3, width: "178px"}}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IconButton sx={{color: "white",
                  height: 40, 
                  width: 40,
                  marginRight:1,
                  backgroundColor:"black",
                  ":hover": {
                  backgroundColor:"white", color:'black'}
                }}
                size="large"
                type="submit"
                edge="start"
                onClick={handleSearch}
                aria-label="open drawer">
                <SearchIcon />
              </IconButton>
            </Box>
            <Link href="#" sx={{ml:3, mr:1, display: {md:'none'}}}>
              <StyledBadge badgeContent={10} max={9} sx={{pt:1.5}} color="secondary">
                <ShoppingCartIcon  fontSize="medium" sx={{color: "black"}}/>
              </StyledBadge>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <MakeDrawer open={isDrawOpen} onClose={onDrawerClose}/>
    </ThemeProvider>
  );
}

export default Header;