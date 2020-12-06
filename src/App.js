import React, { useState } from "react";
import { Box, TextField, Button } from "@material-ui/core";

function App() {
  const [battCap, setBattCap] = useState();
  const [devCon, setDevCon] = useState();
  const [answer, setAnswer] = useState("");

  const updateBattCap = (event) => {
    setBattCap(event.target.value);
    console.log(battCap);
  };
  const updateDevCon = (event) => {
    setDevCon(event.target.value);
    console.log(devCon);
  };

  const calculate = () => {
    let calcResult = 0;
    if (battCap && devCon) {
      calcResult = (battCap / devCon) * 0.7;
    }
    setAnswer(calcResult);
  };

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
      <TextField
        value={battCap}
        onChange={updateBattCap}
        variant="standard"
        type="number"
        label="mHa"
      />
      <h3>Device Consumption</h3>
      <TextField
        onChange={updateDevCon}
        value={devCon}
        variant="standard"
        type="number"
        label="mA"
      />
      <br />
      <Button onClick={calculate} variant="contained">
        Calculate
      </Button>
      <br />
      <TextField value={answer} disabled variant="filled" label="Hours" />
    </Box>
  );
}

export default App;
