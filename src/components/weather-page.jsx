import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getFiveDaysForcastForCurrentLocation } from "../api";

const WeatherPage = ({ cityId }) => {
  const [weatherForcast, setWeatherForcast] = useState([]);
  const getWeatherData = async () => {
    const { list } = await getFiveDaysForcastForCurrentLocation(cityId);
    setWeatherForcast(list);
  };

  useEffect(() => {
    getWeatherData();
  }, [weatherForcast]);
  return (
    <div>
      {weatherForcast.map((forcast, idx) => (
        <Box key={idx} mb={5}>
          <Card elevation={4}>
            <Typography align="center" variant="h5">
              Weather at {forcast.dt_txt} is :
              <Typography variant="h5" color="primary" component="span">
                {" "}
                {forcast.weather[0].main}
              </Typography>
            </Typography>
            <Typography align="center" variant="body1" color="textSecondary">
              {forcast.weather[0].description}
            </Typography>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default WeatherPage;
