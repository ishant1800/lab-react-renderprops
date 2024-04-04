import React, { useState } from 'react';

function CounterComponent(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      {props.render(count, increment)}
    </div>
  );
}

export default CounterComponent;
