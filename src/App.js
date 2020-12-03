import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

function App() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        height: "650px",
        margin: "10vh auto",
        border: "4px solid grey",
        borderRadius: "10px",
        padding: "3vh",
        fontFamily: "revert",
        color: "darkgrey",
      }}
    >
      <h1>Battery Life Calculator</h1>
      <h3>Battery Capacity</h3>
      <TextField variant="standard" type="number" label="mHa" />
      <h3>Device Consumption</h3>
      <TextField variant="standard" type="number" label="mHa" />
      <br />
      <Button variant="contained">Calculate</Button>
      <br />
      <TextField disabled variant="filled" label="Hours" />
    </Box>
  );
}

export default App;
