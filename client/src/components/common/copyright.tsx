import React from "react";
import Typography  from "@mui/material/Typography";

const CopyRight = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Brian Nguyen - 2022'}
    </Typography>
  );
}

export default CopyRight;