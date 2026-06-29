import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMsg from "./components/WelcomeMsg.jsx";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    if (itemName.trim() === "" || itemDueDate.trim() === "") {
      return;
    }

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName, todoDueDate) => {
    let delItem = { name: todoItemName, dueDate: todoDueDate };
    const listAfterDel = todoItems.filter((item) => {
      return !(item.name === delItem.name && item.dueDate === delItem.dueDate);
    });
    setTodoItems(listAfterDel);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
