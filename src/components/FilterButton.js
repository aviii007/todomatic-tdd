import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      data-testid="btn toggle-btn-id"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span data-testid = "span-id" className="visually-hidden">Show </span>
      <span data-testid = "span-id">{props.name}</span>
      <span data-testid = "span-id" className="visually-hidden"> tasks</span>
    </button>
  );
}


export default FilterButton;