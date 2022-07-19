import React from "react";
import "./App.css";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/styles";
import Themes from "./themes";

function App() {
  return (
    <>
      <ThemeProvider theme={Themes.default}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
