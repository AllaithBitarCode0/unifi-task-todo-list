import { Button } from "@mui/material";
import React from "react";
import Todo from "./todo-component/todo.component";
import { Link } from "react-router-dom";

const Todos = ({ todos, setTodos }) => {
  return (
    <div>
      <div style={{ maxHeight: "70vh", overflowX: "hidden" }}>
        {todos.map((todo, idx) => (
          <Todo key={idx} todo={todo} setTodos={setTodos} />
        ))}
      </div>
      <Button
        style={{ marginBottom: 10 }}
        component={Link}
        to="/addtodo"
        variant="outlined"
        fullWidth
      >
        Add todo
      </Button>
      <Button component={Link} to="/archivedtodos" color="secondary" fullWidth>
        archived todos
      </Button>
    </div>
  );
};

export default Todos;
