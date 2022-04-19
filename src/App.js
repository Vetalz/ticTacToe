import React, {useState, useCallback, useMemo} from 'react';
import Button from "./Button";
import Status from "./Status";
import Field from "./Field";
import checkPatterns from "./checkPattern";
import Context from "./context/Context";

const App = () => {
  const [player, setPlayer] = useState('X');
  const [values, setValues] = useState(new Array(9).fill(''));

  const winner = useMemo(() => {
    for (let i = 0; i < checkPatterns.length; i++) {
      if (values[checkPatterns[i][0]] === '') {
        continue;
      }

      if (values[checkPatterns[i][0]] === values[checkPatterns[i][1]] &&
        values[checkPatterns[i][0]] === values[checkPatterns[i][2]]) {
        return values[checkPatterns[i][0]];
      }
    }
    return null;
  }, [values])

  const isDraw = useMemo(() => {
    let filled = true;
    for (const value of values) {
      if (value === '') {
        filled = false;
      }
    }
    return filled;

  }, [values])

  const isEnd = useMemo(() => winner || isDraw, [winner, isDraw])

  const chooseSquare = useCallback((idx) => {
    if (!isEnd) {
      setValues(() => {
        if (values[idx] === '') {
          const newValues = [...values];
          newValues[idx] = player;

          if (player === 'X') {
            setPlayer('O');
          } else {
            setPlayer('X');
          }

          return newValues;
        }
        return values;
      });
    }
  },[player, isEnd]);

  const playAgain = useCallback(() => {
    setValues(new Array(9).fill(''));
    setPlayer('X');
  }, [isEnd]);

  return (
    <React.Fragment>
      <Status player={player} winner={winner} isEnd={isEnd}/>
      <Context.Provider value={
        {values, chooseSquare}
      }>
        <Field />
      </Context.Provider>
      <Button playAgain={playAgain}/>
    </React.Fragment>
  );
};

export default App;