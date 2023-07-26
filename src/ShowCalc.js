import React, { useState } from 'react';
import './index.css';

const ShowCalc = () => {
  const [initialValue, setInitialValue] = useState('');

  const inputValue = (number) => {
    setInitialValue((x) => x + number);
  };

  const equalTo = () => {
    try {
      const result = new Function('return ' + initialValue)();
      setInitialValue(result.toString());
    } catch (error) {
      setInitialValue('Error');
    }
  };

  const clearInput = () => {
    setInitialValue('');
  };

  return (
    <div>
      <input type="text" value={initialValue} pattern="[A-Za-z0-9+\-*/()^%]*" />
      <br />
      <button onClick={() => inputValue('1')}>1</button>
<button onClick={() => inputValue('2')}>2</button>
<button onClick={() => inputValue('3')}>3</button>
<button onClick={() => inputValue('4')}>4</button>
<button onClick={() => inputValue('5')}>5</button>
 <button onClick={() => inputValue('6')}>6</button>
<button onClick={() => inputValue('7')}>7</button>
<button onClick={() => inputValue('8')}>8</button>
 <button onClick={() => inputValue('9')}>9</button>
<button onClick={() => inputValue('0')}>0</button>
<button onClick={() => inputValue('+')}>+</button>
<button onClick={() => inputValue('-')}>-</button>
<button onClick={() => inputValue('*')}>*</button>
<button onClick={() => inputValue('/')}>/</button>
<button onClick={equalTo}>=</button>
<button onClick={clearInput}>Clear</button><button onClick={()=>inputValue('**(1/2)')}>sqrt</button>
<button onClick={() => inputValue('**')}>^<
/button>


    </div>
  );
};

export default ShowCalc;

