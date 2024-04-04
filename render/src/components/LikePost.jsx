import React from 'react';

export default function LikePost(props) {
  const postCount = props.count;
  const postIncrement = props.increment;

  return (
    <div>
      <button onClick={postIncrement}>Like Post {postCount}</button>
    </div>
  );
}
