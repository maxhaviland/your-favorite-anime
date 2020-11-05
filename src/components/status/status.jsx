import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Status = ({icon, message}) => {
  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      {icon}
      <Typography color="secondary" align="center" paragraph variant="h4">
        {message}
      </Typography>
      <div>
        <Typography paragraph variant="h5" color="secondary">
          :(
        </Typography>
      </div>
    </Grid>
  );
};

export default Status;
