import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText(""); // Limpiar el campo
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;
