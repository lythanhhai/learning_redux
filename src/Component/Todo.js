import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddAction, EditAction, DeleteAction } from "../Redux_Todo/action";

const Todo = () => {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.reducerTodo).todos;
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <input
        type="text"
        value={value}
        placeholder="Enter a todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btnAdd"
        onClick={() => {
          dispatch(AddAction(value, todos.length));
        }}
      >
        Add
      </button>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo.value}
            <button
              type="button"
              onClick={() => {
                dispatch(EditAction(value, index));
              }}
            >
              edit
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(DeleteAction(index));
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default React.memo(Todo);
