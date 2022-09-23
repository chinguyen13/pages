import { Grid } from "@mui/material";
import React from "react";

const BackgroundSide = (props:any) => {
  return (
    <Grid {...props}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'grey',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
    </Grid>
  );
}

export default BackgroundSide;