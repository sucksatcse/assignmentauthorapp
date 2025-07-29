
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const commentsData = [
  { id: 1, author: "boinga", date: "30 july 2025", text: "he is chatgaya.", likes: 12, dislikes: 1 },
  { id: 2, author: "kallu", date: "29 july 2025", text: "he is black.", likes: 8, dislikes: 0 },
  { id: 3, author: "challu", date: "28 july 2025", text: "chele pura shada.", likes: 10, dislikes: 2 },
];



const HomePage = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [page, setPage] = useState(1);
  const commentsPerPage = 2;

  const handleReactionClick = (reaction) => {
    setSelectedReaction(selectedReaction === reaction ? null : reaction);
  };

  const paginatedComments = commentsData.slice(
    (page - 1) * commentsPerPage,
    page * commentsPerPage
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>please leave a comment</h2>
      <p>pleas leave a reaction</p>

      <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
        <Button
          variant={selectedReaction === "like" ? "contained" : "outlined"}
          onClick={() => handleReactionClick("like")}
          startIcon={<ThumbUpIcon />}
        >
          Like
        </Button>
        <Button
          variant={selectedReaction === "love" ? "contained" : "outlined"}
          onClick={() => handleReactionClick("love")}
          startIcon={<FavoriteIcon />}
        >
          Love
        </Button>
        <Button
          variant={selectedReaction === "angry" ? "contained" : "outlined"}
          onClick={() => handleReactionClick("angry")}
          startIcon={<SentimentVeryDissatisfiedIcon />}
        >
          Angry
        </Button>
        <Button
          variant={selectedReaction === "sad" ? "contained" : "outlined"}
          onClick={() => handleReactionClick("sad")}
          startIcon={<SentimentDissatisfiedIcon />}
        >
          Sad
        </Button>
      </div>

      <p>By <Link to="/author/1">Author Name</Link>, 7 January 2025</p>

      <h3>Comments</h3>
      {paginatedComments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: "10px", padding: "10px", background: "#fff", borderRadius: "5px" }}>
          <p><Link to="/author/1">{comment.author}</Link> - {comment.date}</p>
          <p>{comment.text}</p>
          <div>
            <Button size="small">Like {comment.likes}</Button>
            <Button size="small">Dislike {comment.dislikes}</Button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        {[1, 2].map((num) => (
          <Button
            key={num}
            onClick={() => setPage(num)}
            variant={page === num ? "contained" : "outlined"}
            style={{ margin: "0 5px" }}
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
