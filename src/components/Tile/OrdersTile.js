import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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

export default function OrdersTile(props) {
  const classes = useStyles();
  return (
    <Grid justify="flex-start" container>
      <Grid item xs={4}>
        <ShoppingCartIcon
          className={classes.icon}
          color="primary"
          fontSize="large"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.subtitle}>
          Total Orders placed
        </Typography>
        <Typography color="primary">{props.products}</Typography>
      </Grid>
    </Grid>
  );
}
