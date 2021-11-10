import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";

const Navbar = ({ toggleDarkMode, currentWeather }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo list
        </Typography>
        {currentWeather.weather && (
          <Box
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/weather")}
          >
            <Typography align="center" variant="body1">
              Current Wearther is : {"  "}
              {currentWeather?.weather[0]?.main}
            </Typography>
            <Typography align="center" variant="body2" color="textSecondary">
              {currentWeather?.weather[0]?.description}
            </Typography>
          </Box>
        )}
        <IconButton style={{ marginLeft: 20 }} onClick={() => toggleDarkMode()}>
          <DarkModeIcon style={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
