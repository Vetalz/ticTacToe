import React, {useContext} from 'react';
import Context from "./context/Context";

const Square = ({index}) => {
  const context = useContext(Context);

  return (
    <div onClick={() => context.chooseSquare(index)} className={`square ${context.values[index] === 'X' ? 'cross' : 'toe'}`}>
      <span>{context.values[index]}</span>
    </div>
  );
};

export default Square;