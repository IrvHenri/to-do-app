import React from "react";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1 },
    ]);
    setInputText("");
  }
  function statusHandler(event) {
    setStatus(event.target.value);
  }
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Add a todo"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button className="add-btn" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
