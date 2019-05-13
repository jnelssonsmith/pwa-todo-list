import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PWA To-do List</h1>
        <p>A simple to-do list PWA built using React</p>
      </header>
      <main>
        <div class="todo__container">
          <input placeholder="Add to-do"></input>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
