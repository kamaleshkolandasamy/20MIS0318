import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function FibonacciCalculator() {
  const [number, setNumber] = useState('');
  const [fibonacciSequence, setFibonacciSequence] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!number || isNaN(number)) {
      alert('Please enter a valid number.');
      return;
    }
    const result = calculateFibonacci(parseInt(number));
    setFibonacciSequence(result);
  };

  const calculateFibonacci = (num) => {
    const fibArr = [];
    for (let i = 0; i < num; i++) {
      if (i === 0 || i === 1) {
        fibArr.push(i);
      } else {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
      }
    }
    return fibArr;
  };

  return (
    <div className="fibonacci-container"> {/* Added a class for styling */}
      <h2 className="title">Calculate Fibonacci Sequence</h2> {/* Added a class for styling */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter a number:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      <div className="output"> {/* Added a class for styling */}
        {fibonacciSequence.length > 0 && (
          <div>
            <h3>Fibonacci sequence:</h3>
            <p>{fibonacciSequence.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FibonacciCalculator;