import Form from "./components/Form/Index";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo]);
  };
  const HandleTodo = (e) => {
    const idNow = Number(e.target.parentNode.id);
    const todoNow = todo.filter(function (item, index) {
      return index !== idNow;
    });
    setTodo([...todoNow]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Atividade:</h1>
        <h3>ToDo List</h3>
      </header>
      <Form addTodo={addTodo} />
      <TodoList todo={todo} handleTodo={HandleTodo} />
    </div>
  );
}

export default App;
