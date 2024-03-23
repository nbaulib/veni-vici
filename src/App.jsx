import React, { useState } from 'react';
import './App.css';
import Discover from './components/Discover';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Woofers</h1>
      <h2>learn about dogs</h2>
      <Discover/>
    </div>
  )
}

export default App
