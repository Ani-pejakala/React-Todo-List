import React, { Component } from "react";

function Completed(props){
   const{onDelete,onCheck,todo,vis}=props;
    if (!todo.done||!props.vis) return null;
    return (
      <li>
        <input type="checkbox" checked onChange={() =>onCheck(todo)} />
        <label>{todo.text}</label>
        <button className="delete" onClick={()=>onDelete(todo)}>{"Delete"}</button>
      </li>
    );
  }


export default Completed;
