import { makeStyles } from "@mui/styles";

const useTodoStyles = makeStyles((theme) => ({
  todoCard: {
    height: "10vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
}));

export default useTodoStyles;
