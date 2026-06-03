function AddTodo() {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-sm-4">
          <input type="date" />
        </div>
        <div className="col-sm-2">
          <button type="button" class="btn btn-success my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
