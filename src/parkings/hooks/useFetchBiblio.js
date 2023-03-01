import { useState, useEffect } from "react";

const url = `https://analisis.datosabiertos.jcyl.es/api/records/1.0/search/?dataset=registro-de-instituciones-bibliotecarias-de-castilla-y-leon&q=&facet=localidad`;

export const useFetchBiblio = () => {

  const [biblio, setBiblio] = useState([]);

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async() => {
        try {
            const res = await fetch(url)
            const { records }  = await res.json();
             
            console.log(records)
            setBiblio(records)

            } catch (e) {
              //console.error(e)
              setError(true);
            }
        setIsLoading(false);
    }

    fetchData();

  }, []);

  return {
    biblio,
    error,
    isLoading,
  };
};
