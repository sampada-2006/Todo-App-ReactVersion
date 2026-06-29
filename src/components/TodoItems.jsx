import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store.jsx";
import { useContext } from "react";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
