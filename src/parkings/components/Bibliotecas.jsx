import { useFetchBiblio } from '../hooks/useFetchBiblio'

export const Bibliotecas = () => {

  const { biblio, error, isLoading } = useFetchBiblio();
  //console.log(parking)

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
        <ol>
          {
             biblio.map( ({recordid, fields:{id, directoriorelacionado}}) => (
          
              <div key={recordid}>
                <p>{directoriorelacionado}</p>
              </div>
              ))
          }

        </ol>
       
    </>
  )
}
