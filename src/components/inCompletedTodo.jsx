import React from "react";

function InCompletedTodo(props) {
  const { onCheck, onDelete, todo } = props;
  if (todo.done === true || todo.vis === false) return null;
  return (
    <li>
      <input type="checkbox" unchecked="true" onChange={() => onCheck(todo)} />
      <label>{todo.text}</label>
      <button className="delete" onClick={() => onDelete(todo)}>
        {"Delete"}
      </button>
    </li>
  );
}

export default InCompletedTodo;
