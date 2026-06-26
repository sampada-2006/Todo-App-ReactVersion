import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMsg from "./components/WelcomeMsg.jsx";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/03/2026",
    },
    {
      name: "Go to college",
      dueDate: "20/03/2026",
    },
  ];

  const [todoItems, setTodoItems] = useState([]);

  const handelButtonClicked = (itemName, itemDueDate) => {
    if (itemName.trim() === "" || itemDueDate.trim() === "") {
      return;
    }
    let newItem = { name: itemName, dueDate: itemDueDate };
    const newList = [...todoItems, newItem];
    setTodoItems(newList);
  };

  const handelDeleteButton = (todoItemName, todoDueDate) => {
    console.log(`item deleted ${todoItemName}`);
    let delItem = { name: todoItemName, dueDate: todoDueDate };
    const listAfterDel = todoItems.filter(
      (item) => item.name !== delItem.name && item.dueDate !== delItem.dueDate,
    );
    setTodoItems(listAfterDel);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handelButtonClicked} />
      {todoItems.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handelDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;
