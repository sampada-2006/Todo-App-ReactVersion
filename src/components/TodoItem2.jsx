function TodoItem2() {
  let todoName = "Go to college";
  let todoDate = "04/04/2026";
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" class="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
