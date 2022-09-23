import { Box, Button, MenuProps, styled, alpha, Menu, MenuItem, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 150,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


const ShowMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkHome = () =>
  {
    if(window.location.pathname === "/")
    {
      navigate(0);
      return;
    }
    navigate("/")
  }

  return (
    <Box sx={{display: {md:"flex", xs: "none"}, ml:2}}>
      <Button sx={{px:2.5, color:"black",fontSize:"14px"}} onClick={checkHome}>Home</Button>
      <Button 
        sx={{px:2.5, color:"black",fontSize:"14px"}}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >Shop</Button>
      <Button sx={{px:2.5, color:"black",fontSize:"14px"}}>About</Button>
      <Button sx={{px:2.5, color:"black",fontSize:"14px"}}>Contact</Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Grid container spacing={3} sx={{px:3, pb:2}}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                  alt="DIY"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    DIY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Toys and models made by your own hands. All ingredients are available.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                  alt="Paper Painting"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Paper Painting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Paper Coloring is a fun game by coloring pre-drawn pictures of different genres
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://source.unsplash.com/random"
                  alt="Paper toys"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Paper toys
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Paper toy is a toy made of paper, you can play it with your friends.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {/* <MenuItem onClick={handleClose} disableRipple>
          DIY
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Paper Painting
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Paper Toys
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Painting tools
        </MenuItem> */}
      </StyledMenu>
    </Box>
    
  );
}

export default ShowMenu;