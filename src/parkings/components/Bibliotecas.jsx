import { useFetchBiblio } from '../hooks/useFetchBiblio'

// https://www.google.com/maps/search/?api=1&query={latitud},{longitud}
// https://www.google.com/maps/search/?api=1&query=41.31069493822491,-4.917583465576172

export const Bibliotecas = () => {

  const { biblio, error, isLoading } = useFetchBiblio();
  //console.log(biblio)

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
        <div className='listadoBiblios'>
          {
             biblio.map( ( {recordid, fields:{directoriorelacionado1, nombreentidad,directorio_superior, geolocalizacion: [lat = '', long = ''] = [] }} ) => (
          
                  <div 
                    key={recordid} 
                    className="items">
                    <p>{directorio_superior}</p>
                    <p>{nombreentidad}</p>
                    <p>{directoriorelacionado1}</p>

                    { (lat & long ) ? (
                      
                      <>
                      {/* <small>lat: {lat} - long: {long}</small> <br />
                       */}
                      <button className='enlaceMaps'>
                        <a  href={`https://www.google.com/maps/search/?api=1&query=${lat},${long}`} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
                      </button>
                      </>

                    ): (
                          <small>No hay datos de ubicación</small>
                    )}

                  </div>

              ))
          }
        </div>
       
    </>
  )
}
