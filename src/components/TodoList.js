import React from "react";

import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <div className="todo-ul">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
