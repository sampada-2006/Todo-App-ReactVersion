import { useState, useRef } from "react";
import { IoBagAdd } from "react-icons/io5";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo() {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const contextObj = useContext(TodoItemsContext);

  const handleAddButton = () => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    contextObj.addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className={`${styles.inputBar} container`}>
      <form
        className={`${styles.inputRow} row my-row`}
        onSubmit={handleAddButton}
      >
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success my-button">
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
