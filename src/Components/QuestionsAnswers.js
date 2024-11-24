// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Button,
// } from "@mui/material";
// import axios from "axios";

// const QuestionsAnswers = () => {
//   const [questions, setQuestions] = useState([]);
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
//       setQuestions(response.data);
//     });
//   }, []);

//   const filterQuestions = () => {
//     switch (filter) {
//       case "weekly":
//         return questions.filter(() => Math.random() > 0.5);
//       case "monthly":
//         return questions.filter(() => Math.random() > 0.3);
//       case "yearly":
//         return questions.filter(() => Math.random() > 0.7);
//       case "mostLiked":
//         return questions.sort(() => Math.random() - 0.5);
//       default:
//         return questions;
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Box display="flex" justifyContent="space-between">
//           <Button onClick={() => setFilter("weekly")}>Weekly</Button>
//           <Button onClick={() => setFilter("monthly")}>Monthly</Button>
//           <Button onClick={() => setFilter("yearly")}>Yearly</Button>
//           <Button onClick={() => setFilter("mostLiked")}>Most Liked</Button>
//         </Box>
//       </Grid>
//       {filterQuestions().map((question) => (
//         <Grid item xs={12} md={6} key={question.id}>
//           <Grid item>
//             <Box>
//               <Typography variant="h6">{question.title}</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {question.body.slice(0, 100)}...
//               </Typography>
//               <Typography variant="caption" color="textSecondary">
//                 Views: {Math.floor(Math.random() * 500)}, Likes:{" "}
//                 {Math.floor(Math.random() * 100)}
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default QuestionsAnswers;
