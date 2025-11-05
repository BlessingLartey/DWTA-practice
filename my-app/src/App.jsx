import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import "./App.css";
import useTodo from "./useTodo.js";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  // const [tasks, setTasks] = useState([]);
  // Edit
  // const [editingTaskId, setEditingTaskId] = useState(null);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count has change:", count);
  // }, [count]);

  // const LOCAL_STORAGE_KEY = "task-list";

  // const [tasks, setTasks] = useState(() => {
  //   const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return saved ? JSON.parse(saved) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  // }, [tasks]);

  // const addTask = () => {
  //   if (input.trim() === "") return;
  //   const newTask = { id: Date.now(), title, body: input, done: false };
  //   setTasks([...tasks, newTask]);
  //   setInput("");
  //   setTitle("");
  // };

  // const deleteTask = (id) => {
  //   const updatedTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(updatedTasks);
  // };

  // const editTask = (id) => {
  //   const taskToEdit = tasks.find((task) => task.id === id);

  //   setTitle(taskToEdit.title);
  //   setInput(taskToEdit.body);
  //   setEditingTaskId(id);
  // };

  // const saveTask = () => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === editingTaskId
  //       ? {
  //           ...task,
  //           title: title,
  //           body: input,
  //         }
  //       : task
  //   );

  //   setTasks(updatedTasks);
  //   setEditingTaskId(null);
  //   setTitle("");
  //   setInput("");
  // };

  // const toggleDone = (id) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === id ? { ...task, done: !task.done } : task
  //   );
  //   setTasks(updatedTasks);
  // };

  const { tasks, addTask, deleteTask, toggleDone } = useTodo();

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTask({ id: Date.now(), title: title, body: input, done: false });
    setInput("");
    setTitle("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Mini Todo App
        </h1>

        <div className="flex flex-col gap-3 mb-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a title!"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Kindly add a task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* {editingTaskId ? (
            <button
              onClick={saveTask}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Save
            </button>
          ) : ( */}
          <button
            onClick={handleAdd}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleDone={toggleDone}
              // editProps={editTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
