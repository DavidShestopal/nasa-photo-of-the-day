import React from 'react';

function PhotoCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageurl} alt="space" />
      <h3> {props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
}

export default PhotoCard;
