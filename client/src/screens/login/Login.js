import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
// import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo
// import google from "../../images";
import google from "../../images/google.svg";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  // var userDispatch = useUserDispatch();

  // local
  // var [isLoading, setIsLoading] = useState(false);
  // var [error, setError] = useState(null);
  // var [activeTabId, setActiveTabId] = useState(0);
  // var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("admin@welrm.com");
  var [passwordValue, setPasswordValue] = useState("password");

  const authenticate = (e) => {
    e.preventDefault();
    console.log("authenticating user", loginValue, passwordValue);
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        {/* <img src={logo} alt="logo" className={classes.logotypeImage} /> */}
        <Typography className={classes.logotypeText}>WELRM</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            // value={activeTabId}
            // onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
          </Tabs>
          <React.Fragment>
            <form onSubmit={(e) => authenticate(e)}>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              {/* <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                Something is wrong with your login or password :(
              </Typography>
            </Fade> */}

              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {false ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    // disabled={
                    //   loginValue.length === 0 || passwordValue.length === 0
                    // }
                    // onClick={() =>
                    //   loginUser(
                    //     userDispatch,
                    //     loginValue,
                    //     passwordValue,
                    //     props.history,
                    //     setIsLoading,
                    //     setError,
                    //   )
                    // }
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </form>
          </React.Fragment>
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-{new Date().getFullYear()}{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            WELRM
          </a>
          , LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default Login;
