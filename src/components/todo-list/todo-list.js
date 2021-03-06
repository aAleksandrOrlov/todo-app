import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...attrs } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...attrs}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
