import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function ComingSoon() {
  const history = useHistory();
  return (
    <div>
      Comming Soon{" "}
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </Button>
    </div>
  );
}
