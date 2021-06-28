import React, { useState } from 'react';
import './App.css';
import TypeWriter from './TypeWriter';

function App() {
  const [text, setText] = useState('Original Text')

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Title of the page
        </h1>
        <button
          onClick={() => {
            setText('~~> Here is the changed Text!! <~~')
          }}
        >
          Test me, please!
        </button>
        <TypeWriter text={text}/>
      </header>
    </div>
  );
}

export default App;
