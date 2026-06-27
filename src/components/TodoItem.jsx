import { MdDeleteForever } from "react-icons/md";
import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className={`${styles.singleItem} container`}>
      <div className="row my-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button
            type="button"
            class="btn btn-danger my-button"
            onClick={() => onDelete(todoName, todoDate)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
