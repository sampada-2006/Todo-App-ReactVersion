import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/03/2026",
    },
    {
      name: "Go to college",
      dueDate: "20/03/2026",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
