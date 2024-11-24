import React from "react";
import { Grid, Paper, Typography, Box, Card } from "@mui/material";

const StatsSection = ({ stats, title }) => {
  return (
    <Card
      elevation={3}
      sx={{ padding: "15px", backgroundColor: "#F8F9FB", mt: 4 }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        gutterBottom
        sx={{ justifyContent: "center", margin: "auto", textAlign: "center" }}
      >
        {title || "User Stats"}
      </Typography>

      <Grid container spacing={3} sx={{ p: 1, mt: 0.5 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0px 6px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Box>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default StatsSection;
