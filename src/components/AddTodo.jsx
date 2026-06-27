import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = () => {
    setTodoName(event.target.value);
  };
  const handleDateChange = () => {
    setDueDate(event.target.value);
  };
  const handleAddButton = () => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
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
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
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
