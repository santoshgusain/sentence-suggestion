import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, Grid, TextField, Button } from "@mui/material";
import { LockOpen, RequestPageOutlined } from "@mui/icons-material";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function authenticate(event) {
    console.log(email, password);

    const payload = {
      email,
      password,
    };

    axios({
      method: "post",
      url: "http://localhost:3001/api/authenticate/login",
      data: payload,
    })
      .then(function (response) {
        const { data } = response;
        localStorage.setItem("id", data.user.token);
        history.push("/dashboard");
      })
      .catch(function (error) {
        if (error.response) {
          const { data } = error.response;
          alert(data.msg);
        }
        console.log(error.message, error);
      });
  }

  return (
    <Container>
      <Box sx={{ width: "45%", display: "grid", margin: "auto" }}>
        <h1>Sign In</h1>
        <Grid container xs={12}>
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
            size="large"
            margin="dense"
            fullWidth
            variant="contained"
            endIcon={<LockOpen />}
            onClick={(event) => authenticate(event)}
          >
            Login
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
