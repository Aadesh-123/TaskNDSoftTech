import React from "react";
import { Container, CssBaseline, Typography, Box, Grid } from "@mui/material";
import ProfileSection from "./Components/ProfileSection";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Grid container sx={{ backgroundColor: "#F8F9FB" }} item p={2}>
        {/* Title */}

        {/* Profile Section */}
        <ProfileSection />
      </Grid>
    </div>
  );
};

export default App;
