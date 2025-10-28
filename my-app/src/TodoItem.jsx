import React from "react";

function TodoItem({ task, deleteTask, toggleDone, editProps }) {
  return (
    <li
      style={{
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        background: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h3
        style={{
          textDecoration: task.done ? "line-through" : "none",
          color: task.done ? "gray" : "black",
          marginBottom: "4px",
        }}
      >
        {task.title}: {task.body}
      </h3>

      <p style={{ margin: "4px 0 10px 0" }}>{task.body}</p>
      <div>
        <button
          onClick={() => toggleDone(task.id)}
          style={{
            backgroundColor: task.done ? "#ffc107" : "#28a745",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "5px",
            marginRight: "8px",
            cursor: "pointer",
          }}
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button onClick={() => editProps(task.id)}>Edit</button>

        <button
          onClick={() => deleteTask(task.id)}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
