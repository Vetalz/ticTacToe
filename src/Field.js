import React, {useMemo} from 'react';
import Square from "./Square";

const Field = () => {
  const items = useMemo(() => {
    const rows = [];
    let item = 0;
    let max = 3;

    for (let i = 0; i < 3; i ++) {
      let row = [];
      for (let i = item; i < max; i++) {
        row.push(<Square index={i} key={i}/>);
      }
      item += 3;
      max += 3;
      rows.push(row);
    }
    return rows;
  },[])

  return (
    <div className='field'>
      {items.map((row, index) => (
        <div className='row' key={index}>
          {row}
        </div>
      ))}
    </div>
  );
};

export default Field;