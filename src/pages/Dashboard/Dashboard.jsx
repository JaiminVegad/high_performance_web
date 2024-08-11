import React, { useState } from "react";
import LinaerStepper from "../LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
function Dashboard() {
  return (
    <div className="dashboard">
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinaerStepper />
        </Paper>
      </Container>
    </div>
  );
}

export default Dashboard;
