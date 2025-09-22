import React, { useReducer, useState } from "react";

const initialState = [];

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function Todoapp() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD", text });
      setText("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h2>Todo App (useReducer)</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter a todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
