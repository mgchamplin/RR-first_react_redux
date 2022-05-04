import Counter from './Counter'
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>To-Do List</h1> 
      <Todo />
    </div>
  );
}

export default App;