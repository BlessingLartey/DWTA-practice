import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function useTodo() {
  return useContext(TodoContext);
}

export default useTodo;
