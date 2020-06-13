import React, { useState, useRef } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0)
  // const countRef = useRef(null);
  // function handleShow() {
  //   setTimeout(() => {
  //     alert(countRef.current)
  //   }, 3000);
  // }
  // function handleAdd() {
  //   countRef.current = count + 1;
  //   setCount(count + 1);
  // }
  console.log('rener')
  return (
    <div>
      {/* count: { count }
      <button 
        onClick={handleAdd}
      > + </button>
      <button onClick={handleShow}>show count</button> */}
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
