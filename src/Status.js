import React from 'react';

const Status = ({text, player}) => {
  return (
    <div className='status'>
      <h1><span>{text}</span> <span>{player}</span></h1>
    </div>
  );
};

export default Status;