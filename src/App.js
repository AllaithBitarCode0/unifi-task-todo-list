import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Todos from "./components/todos.component";
import Navbar from "./components/navbar.component";
import { Route, Routes } from "react-router";
import AddTodo from "./components/add-todo-component/add-todo.component";
import ArchivedTodos from "./components/archived-todos/archived-todos.component";
import { getWeatherForCurrentLocation } from "./api";
import WeatherPage from "./components/weather-page";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const weather = await getWeatherForCurrentLocation(
        position.coords.longitude,
        position.coords.latitude
      );
      setCurrentWeather(weather);
    });
  }, [currentWeather]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navbar
          toggleDarkMode={toggleDarkMode}
          currentWeather={currentWeather}
        />
        <Container maxWidth="md">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Todos
                  todos={todos.filter((todo) => !todo.archivedAt)}
                  setTodos={setTodos}
                />
              }
            />
            <Route path="/addtodo" element={<AddTodo setTodos={setTodos} />} />
            <Route path="/edittodo" element={<AddTodo setTodos={setTodos} />} />
            <Route
              path="/archivedtodos"
              element={
                <ArchivedTodos
                  todos={todos.filter((todo) => !!todo.archivedAt)}
                  setTodos={setTodos}
                />
              }
            />
            <Route
              path="weather"
              element={<WeatherPage cityId={currentWeather.id} />}
            />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
