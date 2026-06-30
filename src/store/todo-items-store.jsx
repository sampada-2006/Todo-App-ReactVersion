import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    if (
      action.payload.itemName.trim() === "" ||
      action.payload.itemDueDate.trim() === ""
    ) {
      return newTodoItems;
    }
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    const delItem = {
      name: action.payload.todoItemName,
      dueDate: action.payload.todoDueDate,
    };
    newTodoItems = currTodoItems.filter((item) => {
      return !(item.name === delItem.name && item.dueDate === delItem.dueDate);
    });
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDueDate: itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName, todoDueDate) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { todoItemName, todoDueDate },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems: todoItems,
          addNewItem: addNewItem,
          deleteItem: deleteItem,
        }}
      >
        {" "}
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};

export default TodoItemsContextProvider;
