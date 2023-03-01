import { useState, useEffect } from "react";

const codMadrid = "28";
const codVall = "47";
const url = `https://www.el-tiempo.net/api/json/v2/provincias/${codVall}`;

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
            const miCiudad = ciudades[0];

            console.log(miCiudad)
            setWeather( {
                id: miCiudad.id,
                name: miCiudad.name,
                stateSky: miCiudad.stateSky.description,
                tempMax: miCiudad.temperatures.max,
                tempMin: miCiudad.temperatures.min,
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
