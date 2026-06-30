import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMsg from "./components/WelcomeMsg.jsx";
import { useReducer } from "react";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
