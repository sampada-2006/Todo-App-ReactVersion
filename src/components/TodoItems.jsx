import TodoItem from "./TodoItem.jsx";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDelete={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
