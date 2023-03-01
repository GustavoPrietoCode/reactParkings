import { useState, useEffect } from "react";

const codMadrid = "28";
const url = `https://www.el-tiempo.net/api/json/v2/provincias/${codMadrid}`;

export const useFetchWeather = () => {

  const [weather, setWeather] = useState({
    id: "",
    name: "",
    stateSky: "",
    tempMax: "",
    tempMin: "",
  });

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async() => {
        try {
            const res = await fetch(url);
            const { ciudades }  = await res.json();
            const madrid = ciudades[0];
            setWeather( {
                id: madrid.id,
                name: madrid.name,
                stateSky: madrid.stateSky.description,
                tempMax: madrid.temperatures.max,
                tempMin: madrid.temperatures.min,
              })
            } catch (e) {
                setError(true);
            }
        setIsLoading(false);
    }

    fetchData();

  }, []);

  return {
        data: weather,
        error,
        isLoading,
  };
};
