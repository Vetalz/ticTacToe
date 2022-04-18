import React from 'react';

const Square = ({value, index, chooseSquare}) => {
  return (
    <div onClick={() => chooseSquare(index)} className={`square ${value === 'X' ? 'cross' : 'toe'}`}>
      <span>{value}</span>
    </div>
  );
};

export default Square;