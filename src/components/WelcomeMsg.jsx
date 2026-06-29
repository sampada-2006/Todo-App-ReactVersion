import style from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={style.welcome}>Enjoy your day 🎉</p>
  );
};
export default WelcomeMsg;
