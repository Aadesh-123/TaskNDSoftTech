import React from "react";
import {
  Paper,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const ProfileHeader = ({ user }) => {
  return (
    <Grid
      container
      item
      spacing={4}
      p={1}
      // alignItems="center"
      // justifyContent="center"
    >
      {/* Render the profile only if the user data is available */}
      {user && (
        <Grid
          container
          item
          xs={12}
          sm={8}
          md={6}
          spacing={2}
          direction="column"
        >
          {/* Profile Avatar and basic info */}
          <Grid item container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                alt={user.name}
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                sx={{ width: 80, height: 80 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {user.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="500"
              >
                {user.username}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            </Grid>
          </Grid>

          {/* Company information */}
          <Grid item>
            <Typography variant="body2" color="textSecondary" fontWeight="500">
              {user.company?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.company?.catchPhrase}
            </Typography>
          </Grid>

          {/* Location */}
          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="500"
              >
                Location:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {user.address?.street}, {user.address?.suite},{" "}
                {user.address?.city}, {user.address?.zipcode}
              </Typography>
            </Grid>
          </Grid>

          {/* Website link */}
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ProfileHeader;
