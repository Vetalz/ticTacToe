import React from 'react';
import Square from "./Square";

const Field = ({values, chooseSquare}) => {
  return (
    <div className='field'>
      <div className='row'>
        <Square value={values[0]} index={0} chooseSquare={chooseSquare}/>
        <Square value={values[1]} index={1} chooseSquare={chooseSquare}/>
        <Square value={values[2]} index={2} chooseSquare={chooseSquare}/>
      </div>
      <div className='row'>
        <Square value={values[3]} index={3} chooseSquare={chooseSquare}/>
        <Square value={values[4]} index={4} chooseSquare={chooseSquare}/>
        <Square value={values[5]} index={5} chooseSquare={chooseSquare}/>
      </div>
      <div className='row'>
        <Square value={values[6]} index={6} chooseSquare={chooseSquare}/>
        <Square value={values[7]} index={7} chooseSquare={chooseSquare}/>
        <Square value={values[8]} index={8} chooseSquare={chooseSquare}/>
      </div>
    </div>
  );
};

export default Field;