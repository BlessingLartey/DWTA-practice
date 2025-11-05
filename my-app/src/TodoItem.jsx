import React from "react";

function TodoItem({ task, deleteTask, toggleDone, editProps }) {
  return (
    <li className="bg-white shadow-md rounded-xl p-4 my-3 flex flex-col gap-3 transition hover:shadow-lg">
      {/* Task Title */}
      <h3
        className={`text-lg font-semibold ${
          task.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.title}
      </h3>

      {/* Task Body */}
      <p
        className={`text-sm ${
          task.done ? "text-gray-400 italic" : "text-gray-600"
        }`}
      >
        {task.body}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <button
          onClick={() => toggleDone(task.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors duration-200 ${
            task.done
              ? "bg-yellow-500 hover:bg-yellow-400"
              : "bg-green-600 hover:bg-green-500"
          }`}
        >
          {task.done ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => editProps(task.id)}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-200"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-500 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
