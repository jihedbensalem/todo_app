import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos || [];
    const filter = state.filter || "ALL";
    const searchTerm = state.searchTerm ? state.searchTerm.toLowerCase() : "";

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <>
      <br />
      <h3 style={{ paddingLeft: "10px" }}>Todo List</h3>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
