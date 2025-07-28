import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const commentsData = [
  { id: 1, author: "boinga", date: "10 February 2025", text: "he is chatgaya.", likes: 12, dislikes: 1 },
  { id: 2, author: "kallu", date: "10 February 2025", text: "he is black.", likes: 8, dislikes: 0 },
  { id: 3, author: "challu", date: "10 February 2025", text: "chele pura shada.", likes: 10, dislikes: 2 },
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
