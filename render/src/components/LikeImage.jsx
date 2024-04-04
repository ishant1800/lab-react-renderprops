import React from 'react';

export default function LikeImage(props) {
  const likeCount = props.count;
  const likeIncrement = props.increment;

  return (
    <div>
      <button onClick={likeIncrement}>Like Image {likeCount}</button>
    </div>
  );
}
