import { Weather } from '../components/weather'

export const HomePage = () => {


  return (

    <>
      <div className='bodyPage bodyHomePage'>

        <main className='main'>
          <h1>VallaOcio</h1>
          <p><strong>Conoce las últimas novedades culturales de tu ciudad</strong></p>
          <Weather />
        </main>

      </div>
      
      
      
    </>

    
  )
}
