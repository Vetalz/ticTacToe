import React from 'react';

const Status = ({player, winner, isEnd}) => {
  return (
    <div className='status'>
      {isEnd
        ? winner
          ? <h1><span>Winner:</span> <span>{winner}</span></h1>
          : <h1><span>Draw</span></h1>
        : <h1><span>Next player:</span> <span>{player}</span></h1>
      }
    </div>
  );
};

export default Status;