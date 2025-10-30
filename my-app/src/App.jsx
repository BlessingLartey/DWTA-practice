import { useEffect, useState } from "react";
import TodoItem from "./TodoItem.jsx";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  // const [tasks, setTasks] = useState([]);
  // Edit
  const [editingTaskId, setEditingTaskId] = useState(null);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count has change:", count);
  // }, [count]);

  const LOCAL_STORAGE_KEY = "task-list";

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), title, body: input, done: false };
    setTasks([...tasks, newTask]);
    setInput("");
    setTitle("");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    setTitle(taskToEdit.title);
    setInput(taskToEdit.body);
    setEditingTaskId(id);
  };

  const saveTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId
        ? {
            ...task,
            title: title,
            body: input,
          }
        : task
    );

    setTasks(updatedTasks);
    setEditingTaskId(null);
    setTitle("");
    setInput("");
  };

  const toggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Mini Todo App</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a title!"
      />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kindly add a task"
      />

      {editingTaskId ? (
        <button onClick={saveTask}>Save</button>
      ) : (
        <button onClick={addTask}>Add task</button>
      )}

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            editProps={editTask}
          />
        ))}
      </ul>

      {/* <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div> */}
    </div>
  );
}

export default App;
