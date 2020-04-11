import React from 'react';
import PreviewPanel from './components/code';
import CodePanel from './components/preview';

function App() {
  return (
    <div className="App">
      <PreviewPanel/>
      <CodePanel/>
    </div>
  );
}

export default App;
