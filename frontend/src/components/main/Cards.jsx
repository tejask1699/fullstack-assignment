// import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./cards.css";

function Cards({ title, description }) {
  return (
    <div className="cardContainer">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <hr className="cardHr" />
        <p className="card-content">{description}</p>
      </div>
    </div>
  );
}

export default Cards;
