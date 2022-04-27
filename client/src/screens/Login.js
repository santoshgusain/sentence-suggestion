import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, Grid, TextField, Button } from "@mui/material";
import { LockOpen, RequestPageOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/actions/authenticate";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const authenticateReducer = useSelector((state) => state.authenticateReducer);
  useEffect(() => {
    if (authenticateReducer.login == "true") {
      history.push("/dashboard");
    }
  }, [props, authenticateReducer]);

  function authenticate(event, name) {
    event.preventDefault();
    const credentials = { email, password };
    dispatch(loginAction(credentials));
  }

  return (
    <Container>
      <Box sx={{ width: "45%", display: "grid", margin: "auto" }}>
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
  );
}

export default Login;
