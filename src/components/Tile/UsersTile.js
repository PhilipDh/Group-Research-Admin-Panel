import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    width: "100%"
  },

  icon: {
    fontSize: 40
  },

  subtitle: {
    fontSize: 12,
    color: "#9e9e9e"
  }
}));

export default function UsersTile(props) {
  const classes = useStyles();
  return (
    <Grid justify="flex-start" container>
      <Grid item xs={4}>
        <PeopleIcon className={classes.icon} color="primary" fontSize="large" />
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.subtitle}>Registered Users</Typography>
        <Typography color="primary">{props.users}</Typography>
      </Grid>
    </Grid>
  );
}
