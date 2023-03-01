import { useFetchWeather } from '../hooks/useFetchWeather'

export const Weather = () => {

    const { data:{id, name}, error, isLoading } = useFetchWeather();
  //console.log(data)

  if(isLoading){
    return (
        <>
        <p>Está cargando</p>
        </>
    )
  }

  if(error) {
    return (
      <>
        <p>Ha habido un error al obtener datos</p>
      </>
    )
  }


  return (
    <div>
        <h2>
          {name}
        </h2>
    </div>
  )
}
