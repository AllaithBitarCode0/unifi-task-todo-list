import React, { useState } from "react";
import { Card, IconButton, Typography } from "@mui/material";
import useTodoStyles from "./todo.styles";
import { Box } from "@mui/system";
import { Delete, Edit, Info, Archive } from "@mui/icons-material";
import TodoInfoDialog from "../todo-info-dialog/todo-info-dialog.component";
import { useNavigate } from "react-router";

const Todo = ({ todo, setTodos }) => {
  const navigate = useNavigate();
  const classes = useTodoStyles();

  const [openTodoDialog, setOpenTodoDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenTodoDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenTodoDialog(false);
  };

  const handleToggleTodo = (ToggledTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.createdAt == ToggledTodo.createdAt
          ? {
              ...todo,
              checked: !todo.checked,
              finishedAt: todo.archivedAt
                ? ""
                : new Date().toString().slice(0, 25),
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (deletedTodo) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.createdAt != deletedTodo.createdAt)
    );
  };

  const handleEditTodo = (editedTodo) => {
    navigate("/edittodo", { state: { editedTodo } });
  };

  const handleArchiveTodo = (archiedTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.title == archiedTodo.title
          ? {
              ...todo,
              archivedAt: todo.archivedAt
                ? ""
                : new Date().toString().slice(0, 25),
            }
          : todo
      )
    );
  };
  return (
    <div>
      <Card className={classes.todoCard}>
        <Typography onClick={() => handleToggleTodo(todo)}>
          {todo.checked ? <strike>{todo.title}</strike> : todo.title}
        </Typography>
        <Box>
          <IconButton>
            <TodoInfoDialog
              Icon={Info}
              open={openTodoDialog}
              setOpen={setOpenTodoDialog}
              handleOpen={handleOpenDialog}
              handleClose={handleCloseDialog}
              todo={todo}
            />
          </IconButton>
          <IconButton onClick={() => handleEditTodo(todo)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleArchiveTodo(todo)}>
            <Archive />
          </IconButton>
          <IconButton onClick={() => handleDeleteTodo(todo)}>
            <Delete />
          </IconButton>
        </Box>
      </Card>
    </div>
  );
};

export default Todo;
