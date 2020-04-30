import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import validate from "validate.js";
import { Login } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

//Format for Validate.js
const format = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128,
    },
  },
};

//Handles the state for the ProductList and all the network requests
const LoginContainer = (props) => {
  const classes = useStyles();

  //State for SignIn form
  const [formState, setFormState] = useState({
    isValid: false, //Valid format
    values: {}, //values
    touched: {}, //Fields have been touched
    errors: {}, //Errors to be displayed
  });

  //Hook equivalent of componendDIdMount, componentDidUpdate... Basically an async request that does not clog up the main thread
  useEffect(() => {
    const errors = validate(formState.values, format);
    //Updates the login form error messages
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]); //Executes everytime formState.values changes

  //Gets called everytime one of the form input changes
  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState, //values for errors and isValid
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const startLogin = async (username, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    urlencoded.append("email", username);
    urlencoded.append("password", password);

    fetch("http://localhost:80/v1/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => props.setToken(result.token))
      .catch((error) => console.log("error", error));
  };

  //Checks wether a field in the form has an error
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  //Gets run on button click and performs a login request
  const handleSignIn = (event) => {
    event.preventDefault();
    startLogin(formState.values.email, formState.values.password);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Login
          startLogin={startLogin}
          formState={formState}
          handleChange={handleChange}
          hasError={hasError}
          handleSignIn={handleSignIn}
        />
      </div>
    </div>
  );
};

export default LoginContainer;
