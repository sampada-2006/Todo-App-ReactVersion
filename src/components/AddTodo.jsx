import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = () => {
    setTodoName(event.target.value);
  };
  const handleDateChange = () => {
    setDueDate(event.target.value);
  };
  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row my-row">
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
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
