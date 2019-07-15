import React from 'react';

const Todo = ({ id, text, completed, toggleToDo }) => {
  return (
    <li
      onClick={ toggleToDo }
      style={
        { textDecoration: completed ? 'line-through' : 'none' }
      }
    >{text}</li>
  )
}

export default Todo;
