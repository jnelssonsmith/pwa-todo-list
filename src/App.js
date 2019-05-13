import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PWA To-do List</h1>
        <p>A simple to-do list PWA built using React</p>
      </header>
      <main>
        <ToDoList />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
