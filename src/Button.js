import React from 'react';

const Button = ({playAgain}) => {
  return (
    <div className='btn'>
      <button onClick={() => playAgain()}>Play again</button>
    </div>
  );
};

export default Button;