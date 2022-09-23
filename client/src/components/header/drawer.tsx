import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Drawer, Box, Collapse } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SnackbarSuccess from "../snackbar/snackbar-success";
import CONSTANTS from "../common/constants";
import logo from "./logo192.png"

const MakeDrawer = (props: any) => {
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState(false);
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

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setMessage({
      message: "Copied",
      open: true
    })
  }

  const handleOpenCollapse = () => {
    setOpenCollapse(!openCollapse);
  }

  const CollapseMenu = () => {
    return(
      <Collapse in={openCollapse} unmountOnExit>
        <MenuList disablePadding>
          <MenuItem>
            <ListItemText>DIY</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Paper Painting</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Paper Toys</ListItemText>
          </MenuItem>
        </MenuList>
      </Collapse>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.onClose}
    >
      <SnackbarSuccess open={message.open} message={message.message} handleClose={handleClose}/>
      <Box p={2} width="270px" role='presentation'>
        <MenuList>
          <Box sx={{textAlign:"center", mb:2}}>
            <Box
                component="img"
                sx={{
                  height: "50px",
                }}
                alt="Logo"
                src={logo}/>
          </Box>
          <MenuItem onClick={() => copyToClipboard(CONSTANTS.PHONE_NUMBER)}>
            <ListItemIcon>
              <PhoneIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>{CONSTANTS.PHONE_NUMBER}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => copyToClipboard(CONSTANTS.EMAIL)}>
            <ListItemIcon>
              <EmailIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>{CONSTANTS.EMAIL}</ListItemText>
          </MenuItem>
          <Divider/>
          <MenuItem>
            <ListItemIcon>
              <HomeIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>HOME</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleOpenCollapse}>
            <ListItemIcon>
              <ShoppingBagIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>SHOP </ListItemText> {openCollapse ?  <ExpandLessIcon  sx={{verticalAlign:"middle"}}/>: <ExpandMoreIcon sx={{verticalAlign:"middle"}}/>}
          </MenuItem>
          <CollapseMenu />
          <MenuItem>
            <ListItemIcon>
              <InfoIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>ABOUT</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContactMailIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>CONTACT</ListItemText>
          </MenuItem>
          <Divider/>
          <MenuItem onClick={() => navigate("/login")}>
            <ListItemIcon>
              <LoginIcon sx={{verticalAlign:"middle"}}/>
            </ListItemIcon>
            <ListItemText>Sign In</ListItemText>
          </MenuItem>
        </MenuList>
      </Box>       
    </Drawer>
  );
}
export default MakeDrawer