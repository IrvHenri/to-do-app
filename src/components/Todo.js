import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
    console.log(todo);
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="btn-container">
        <button className="complete-btn todo-btn" onClick={completeHandler}>
          <i className="fas fa-check-square "></i>
        </button>
        <button className="trash-btn todo-btn" onClick={deleteHandler}>
          <i className="fas fa-trash "></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
