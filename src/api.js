import axios from "axios";

const API_KEY = "147ebc21206a10212dd1666e78d70279";

export const getWeatherForCurrentLocation = async (lon, lat) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return data;
};

export const getFiveDaysForcastForCurrentLocation = async (cityId) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`
  );
  return data;
};
