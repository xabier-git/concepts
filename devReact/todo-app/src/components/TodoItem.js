import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TodoItem;
