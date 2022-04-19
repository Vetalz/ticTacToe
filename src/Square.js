import React, {useContext} from 'react';
import Context from "./context/Context";

const Square = ({index}) => {
  const {values, chooseSquare} = useContext(Context);

  return (
    <div onClick={() => chooseSquare(index)} className={`square ${values[index] === 'X' ? 'cross' : 'toe'}`}>
      <span>{values[index]}</span>
    </div>
  );
};

export default Square;