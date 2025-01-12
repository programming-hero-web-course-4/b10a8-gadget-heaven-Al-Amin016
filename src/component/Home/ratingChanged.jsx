import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
 
const ratingChanged = (newRating) => {
  console.log(newRating);
};
 
render(
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />,
 
  document.getElementById("where-to-render")
);