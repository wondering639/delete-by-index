import React from 'react';
import './App.css';
import { MyTable } from './components/MyTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyTable
          initialRows={[
            { id: 101, content: 'first row' },
            { id: 102, content: 'second row' },
            { id: 103, content: 'third row' }
          ]}
        />
      </header>
    </div>
  );
}

export default App;
