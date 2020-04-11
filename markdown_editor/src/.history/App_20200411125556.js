import React from 'react';
import PreviewPanel from './components/code';
import CodePanel from './components/preview';
import './style/editor.css'

function App() {
  return (
    <div id="MarkdownEditor">
      <PreviewPanel/>
      <CodePanel/>
    </div>
  );
}

export default App;
