import React from "react";
import Todo from "../todo-component/todo.component";

const ArchivedTodos = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo, idx) => (
        <Todo key={idx} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ArchivedTodos;
