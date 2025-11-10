import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const LOCAL_STORAGE_KEY = "task-list";

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const toggleDone = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );

  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask, toggleDone }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext };
