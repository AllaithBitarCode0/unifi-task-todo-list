import { makeStyles } from "@mui/styles";

const useTodoInfoDialogStyles = makeStyles((theme) => ({
  dialogContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30vw",
    bgcolor: "background.paper",
    padding: 20,
    [theme.breakpoints.down("md")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
}));

export default useTodoInfoDialogStyles;
