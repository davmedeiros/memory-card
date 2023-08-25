import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import Score from './components/Score';
import 'normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <Score />
    </header>
    <main>
      <Board />
    </main>
  </React.StrictMode>
);
