import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      props.addTask(name);
      setName("");
    }
  }
  return (
    <form data-testid="todo-form" onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg" data-testid = "todo-input-label">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        data-testid = "todo-input-id"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" data-testid="add-btn" className="btn btn__primary btn__lg" >
        Add
      </button>
    </form>
  );
}

export default Form;