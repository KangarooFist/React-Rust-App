import React, { useState } from 'react';
import './App.css';

function App() {
  import('wasm').then(({ add_two_ints, fib }) => {
    const sumResult = add_two_ints(40, 20);
    const fibResult = fib(10);
    setSum(sumResult);
    setFib(fibResult);
  })
  const [sum, setSum] = useState<number>(0);
  const [fib, setFib] = useState<number>(0);

  return (
    // I cut out the fluff
    <div  className="App" >
      <div style={{color: "white", backgroundColor: 'blue', width: '200px'}}>Sum Results: {sum}</div>
      <div style={{color: "white", backgroundColor: 'black', width: '200px'}}>Fib Results: {fib}</div>
    </div>
  );
}

export default App;
