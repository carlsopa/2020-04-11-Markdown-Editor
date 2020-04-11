import React from 'react';
import PreviewPanel from './components/code';
import CodePanel from './components/preview';
import './style/editor'

function App() {
  return (
    <div className="MarkdownEditor">
      <PreviewPanel/>
      <CodePanel/>
    </div>
  );
}

export default App;
