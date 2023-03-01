import { useFetchWeather } from '../hooks/useFetchWeather'

export const Weather = () => {

    const { data:{id, name, stateSky, tempMax, tempMin}, error, isLoading } = useFetchWeather();
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
    <>
      <div className='weather'>
        <h4>La temperatura en {name}</h4>
        <p>{stateSky} - Temp. Max: <strong>{tempMax}</strong> y Temp. Min: <strong>{tempMin}</strong></p>
      </div>

    </>
    
  )
}
