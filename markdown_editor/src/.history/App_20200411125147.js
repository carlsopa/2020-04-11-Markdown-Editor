import React from 'react';
import './components/code';
import './components/preview';

function App() {
  return (
    <div className="App">
      <PreviewPanel/>
      <CodePanel/>
    </div>
  );
}

export default App;
