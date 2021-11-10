import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AddTodo = (props) => {
  const { setTodos } = props;
  const location = useLocation();
  const [newTodo, setNewTodo] = useState(
    location.state?.editedTodo || { title: "", description: "" }
  );
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewTodo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      ...newTodo,
      createdAt: new Date().toString().slice(0, 25),
      Checked: false,
      finishedAt: "",
      archivedAt: "",
    };
    if (location.state?.editedTodo) {
      setTodos((prev) =>
        prev.map((oldTodo) =>
          oldTodo.createdAt == newTodo.createdAt
            ? {
                ...oldTodo,
                title: newTodo.title,
                description: newTodo.description,
              }
            : oldTodo
        )
      );
    } else {
      setTodos((prev) => [...prev, todo]);
    }
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Title"
              value={newTodo.title}
              name="title"
              onChange={(event) => handleChange(event)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Description"
              value={newTodo.description}
              name="description"
              onChange={(event) => handleChange(event)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit">
              {location.state?.editedTodo ? "save edit" : "add todo"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddTodo;
