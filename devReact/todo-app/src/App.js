import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // Agregar una nueva tarea
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Eliminar una tarea
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Marcar una tarea como completada
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Lista de Tareas</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
