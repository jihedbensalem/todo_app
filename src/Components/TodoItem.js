import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodoText,
} from "../Redux/action";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editingText.trim() === "") return;
    dispatch(updateTodoText(index, editingText)); // Envoyer le texte modifié au Redux Store
    setEditingTodo(false);
  };

  return (
    <ListGroup
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-arround",
        
      }}
    >
      <ListGroup.Item>
        {editingTodo ? (
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={editingText}
              onChange={handleEditChange}
            />

            <Button variant="primary" type="submit">
              Save
            </Button>
          </form>
        ) : (
          <>
            <div>
              <span>{index + 1}.</span>
              <span
                className={`mr-4 ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <Button
                variant="primary"
                onClick={() => dispatch(toggleTodo(index))}
              >
                {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
              </Button>
              <Button
                variant="danger"
                onClick={() => dispatch(removeTodo(index))}
              >
                <FaTrash />
              </Button>
              {!todo.completed && (
                <Button
                  variant="success"
                  onClick={() => dispatch(markCompleted(index))}
                >
                  <FaCheck />
                </Button>
              )}
              {todo.completed && (
                <Button
                  variant="warning"
                  onClick={() => dispatch(markIncomplete(index))}
                >
                  <FaTimes />
                </Button>
              )}
              <Button variant="info" onClick={() => setEditingTodo(true)}>
                Edit
              </Button>
            </div>
          </>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default TodoItem;
