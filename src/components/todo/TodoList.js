import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = (props) => (
  <ul className="Todo-List">
    {props.todos.map(todo => <TodoItem key={todo.id} handleToggle={props.handleToggle} {...todo}/>)}
  </ul>
)