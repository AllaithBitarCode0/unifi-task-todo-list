import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import useTodoInfoDialogStyles from "./todo-info.dialog.styles";
import { Card, Grid } from "@mui/material";

export default function TransitionsModal({
  todo,
  Icon,
  open,
  setOpen,
  handleOpen,
  setHandleOpen,
  handleClose,
}) {
  const classes = useTodoInfoDialogStyles();
  return (
    <div>
      <Icon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.dialogContainer}>
            <Grid container>
              <Grid item xs={12}>
                <Typography align="center" variant="h5" gutterBottom>
                  Todo info :
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Title :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.title}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Description :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.description}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Title :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.title}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Checked :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.Checked ? "true" : "false"}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Created at :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.createdAt}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  finished at :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.finishedAt}
                    {todo.finishedAt ? todo.finishedAt : "N/A"}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Archived At :
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {"  "}
                    {todo.archivedAt ? todo.archivedAt : "N/A"}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}
