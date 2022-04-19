import React, {useState, useEffect, useCallback} from 'react';
import Button from "./Button";
import Status from "./Status";
import Field from "./Field";
import checkPatterns from "./checkPattern";
import Context from "./context/Context";

const App = () => {
  const [player, setPlayer] = useState('X');
  const [values, setValues] = useState(new Array(9).fill(''));
  const [text, setText] = useState('Next player:');
  const [isEnd, setIsEnd] = useState(false);

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
    setText('Next player:');
    setPlayer('X');
    setIsEnd(false);
  }, [isEnd]);

  useEffect(checkResult, values);

  function checkResult() {
    let filled = true;
    for (const value of values) {
      if (value === '') {
        filled = false;
      }
    }

    for (let i = 0; i < checkPatterns.length; i++) {
      if (values[checkPatterns[i][0]] === '') {
        continue;
      }

      if (values[checkPatterns[i][0]] === values[checkPatterns[i][1]] &&
        values[checkPatterns[i][0]] === values[checkPatterns[i][2]]) {
        setText('Winner:');
        setPlayer(values[checkPatterns[i][0]]);
        setIsEnd(true);
        return;
      }
    }

    if (filled) {
      setText('Draw');
      setPlayer('');
    }
  }

  return (
    <React.Fragment>
      <Status text={text} player={player}/>
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