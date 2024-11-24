import React from "react";
import {
  Paper,
  CardContent,
  Typography,
  IconButton,
  Box,
  Grid,
  Card,
  CardActions,
} from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";

const PostList = ({ title, posts }) => {
  return (
    <Grid container item xs={12} style={{ borderRadius: 8 }}>
      <CardContent>
        <Typography
          variant="h5"
          style={{
            fontWeight: 600,
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {title}
        </Typography>
      </CardContent>

      {posts.map((post) => (
        <Grid item xs={12} key={post.id} style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              marginBottom: "16px",
              borderRadius: 8,
              boxShadow: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 10,
                transform: "translateY(-5px)",
                backgroundColor: "#f8f8f8",
              },
              backgroundColor: "#fff",
              width: "100%", // Ensure full width here
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 500 }}>
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                marginTop: "10px",
                lineHeight: "1.6",
                color: "#555",
              }}
            >
              {post.body}
            </Typography>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Box display="flex" alignItems="center">
                <IconButton style={{ color: "#e91e63" }} aria-label="like post">
                  <Favorite />
                </IconButton>
                <Typography variant="body2" style={{ color: "#e91e63" }}>
                  {post.likes}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton style={{ color: "#3f51b5" }} aria-label="view post">
                  <Visibility />
                </IconButton>
                <Typography variant="body2" style={{ color: "#3f51b5" }}>
                  {post.views}
                </Typography>
              </Box>
            </CardActions>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
