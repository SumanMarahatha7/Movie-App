import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
  return (
    <center>
    <button className="btn btn-success" onClick={props.onClick}>
      <p>{props.text}</p>
    </button>
    </center>
  )
}

export default LoadMoreBtn;
