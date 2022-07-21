import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Snackbar,
  Typography,
} from "@mui/material";
import { LockOpen, RequestPageOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/authenticate";
import CustomSnackBar from "../components/CustomSnackBar";
import Loader from "../components/Loading";

function useSessionCheck() {
  const history = useHistory();
  const status = localStorage.getItem("user");
  if (status == "1") {
    return history.push("/dashboard");
  }
}

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const authenticateReducer = useSelector((state) => state.authenticateReducer);

  const [popupStatus, setPopupStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useSessionCheck();

  // component did mount
  useEffect(() => {
    setPopupStatus(false);
  });
  // component on update
  useEffect(() => {
    if (authenticateReducer.login) {
      localStorage.setItem("user", "1");
      history.push("/dashboard");
    }
    setPopupStatus(true);
    console.log("pushing to dashboard===================================");
  }, [authenticateReducer.error, authenticateReducer.login]);

  // handle authentication
  function authenticate(event, name) {
    event.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <>
      <Typography>
        <Loader />
      </Typography>
      <Container>
        <Box sx={{ width: "45%", display: "grid", margin: "auto" }}>
          <CustomSnackBar
            open={popupStatus}
            msg={authenticateReducer.error?.msg || null}
          />
          <h1>Sign In</h1>
          <Grid container xs={12}>
            <form onSubmit={(event) => authenticate(event, "santosh")}>
              <TextField
                fullWidth
                id="outlined-required"
                label="Email"
                margin="dense"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextField
                margin="dense"
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <Button
                type="submit"
                size="large"
                margin="dense"
                fullWidth
                variant="contained"
                endIcon={<LockOpen />}
              >
                Login
              </Button>
            </form>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Login;
