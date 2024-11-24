import React, { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import StatsSection from "./StatsSection";
import ReputationGraph from "./ReputationGraph";
import PostList from "./PostList";
import AddPostDialog from "./AddPostDialog";

const ProfileSection = () => {
  const [user, setUser] = useState(null);
  const [questionsAnswers, setQuestionsAnswers] = useState([]); // Separate state for Questions & Answers
  const [posts, setPosts] = useState([]); // Separate state for Posts
  const [filter, setFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    isQuestion: true,
  });

  const stats = [
    { label: "Questions", value: 121 },
    { label: "Articles", value: 52 },
    { label: "Followers", value: 1522 },
    { label: "People Reached", value: 746 },
  ];

  // Fetch user and posts data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user data:", error));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        const first10Posts = posts.slice(0, 10); // First 10 posts
        const last10Posts = posts.slice(-10); // Last 10 posts

        // Add random likes and views to both sets of posts
        const modifiedFirst10Posts = first10Posts.map((post) => ({
          ...post,
          likes: Math.floor(Math.random() * 100),
          views: Math.floor(Math.random() * 1000),
        }));
        const modifiedLast10Posts = last10Posts.map((post) => ({
          ...post,
          likes: Math.floor(Math.random() * 100),
          views: Math.floor(Math.random() * 1000),
        }));

        setPosts(modifiedFirst10Posts); // Save the first 10 posts
        setQuestionsAnswers(modifiedLast10Posts); // Save the last 10 posts
      })
      .catch((error) => console.error("Error fetching posts data:", error));
  }, []);

  const filterData = (data) => {
    if (filter === "weekly") {
      return data.filter(() => Math.random() > 0.5);
    } else if (filter === "monthly") {
      return data.filter(() => Math.random() > 0.3);
    } else if (filter === "yearly") {
      return data.filter(() => Math.random() > 0.7);
    }
    return data;
  };

  const handleAddNewPost = () => {
    const newPostData = {
      id: posts.length + questionsAnswers.length + 1, // Unique ID based on total posts
      title: newPost.title,
      body: newPost.body,
      likes: 0,
      views: 0,
      isQuestion: newPost.isQuestion,
    };

    if (newPost.isQuestion) {
      // Add to questions and answers section
      setQuestionsAnswers([newPostData, ...questionsAnswers]);
    } else {
      // Add to posts section
      setPosts([newPostData, ...posts]);
    }

    setIsDialogOpen(false);
    setNewPost({ title: "", body: "", isQuestion: true });
  };

  return (
    <Grid container spacing={3} sx={{ backgroundColor: "#F8F9FB" }}>
      {/* Profile Header */}
      <Grid item xs={12}>
        <ProfileHeader user={user} />
      </Grid>

      <Grid item xs={12} md={6}>
        <ReputationGraph />
      </Grid>

      {/* Stats Section */}
      <Grid item xs={12} md={6}>
        <StatsSection stats={stats} />
      </Grid>

      {/* Add New Post/Question Button */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsDialogOpen(true)}
        >
          Add New Post/Question
        </Button>
      </Grid>

      {/* Filter Buttons */}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="space-between">
          <Button onClick={() => setFilter("weekly")}>Weekly</Button>
          <Button onClick={() => setFilter("monthly")}>Monthly</Button>
          <Button onClick={() => setFilter("yearly")}>Yearly</Button>
          <Button onClick={() => setFilter("all")}>All</Button>
        </Box>
      </Grid>

      {/* Questions & Answers Section */}
      <Grid item xs={12} md={6}>
        <PostList
          title="Questions & Answers"
          posts={filterData(questionsAnswers)}
        />
      </Grid>

      {/* Posts Section */}
      <Grid item xs={12} md={6}>
        <PostList title="Posts" posts={filterData(posts)} />
      </Grid>

      {/* Add Post Dialog */}
      <AddPostDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        newPost={newPost}
        setNewPost={setNewPost}
        handleAddNewPost={handleAddNewPost}
      />
    </Grid>
  );
};

export default ProfileSection;
