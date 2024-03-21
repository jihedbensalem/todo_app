import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { addTodo, updateSearchTerm } from "../Redux/action";
import { Button } from "react-bootstrap";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", paddingBottom: "10px" }}>
        Personal TODO APP
      </h2>

      <div className="addfilt">
        <div>
          <input
            id="addTodoInput"
            type="text"
            placeholder="Add Todo here"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />

          <Button variant="primary" onClick={handleAddTodo}>
            +
          </Button>
        </div>
        <FilterButtons />
        <div>
          <input
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <Button> - </Button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
